/**
 * Builds public/Alvaro-Scelza-CV.pdf from src/data (the same copy the
 * React pages render). `npm run build` runs this first, and `npm run deploy`
 * runs the build, so a deploy publishes a PDF of the current site text.
 *
 * The file is gitignored. It is one A4 page of selectable Helvetica text.
 * Each role contributes its leading bullets, as many as still fit on that
 * page (at least the first). Headings, dates, education, key technologies,
 * and certifications are the strings from the data, not a second writeup.
 */
import React from "react";
import {readFileSync} from "fs";
import {Document, Link, Page, renderToFile, StyleSheet, Text, View} from "@react-pdf/renderer";
import path from "path";
import {fileURLToPath} from "url";
import profile from "../src/data/profile.mjs";
import {plainText} from "../src/data/plainText.mjs";

const el = React.createElement;
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outPath = path.join(root, "public", profile.cvFileName);

const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 9,
        color: "#111111",
        paddingTop: 28,
        paddingBottom: 28,
        paddingHorizontal: 36,
        lineHeight: 1.3,
    },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 16,
        marginBottom: 2,
    },
    headline: {
        fontFamily: "Helvetica-Bold",
        fontSize: 11,
        marginBottom: 2,
    },
    meta: {
        marginBottom: 2,
    },
    contact: {
        fontSize: 8.5,
        marginBottom: 6,
    },
    link: {
        color: "#111111",
        textDecoration: "none",
    },
    section: {
        fontFamily: "Helvetica-Bold",
        fontSize: 11,
        marginTop: 8,
        marginBottom: 3,
        borderBottomWidth: 0.8,
        borderBottomColor: "#222222",
        paddingBottom: 1,
    },
    job: {
        marginTop: 4,
    },
    jobRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    jobTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9.5,
    },
    jobDates: {
        fontFamily: "Helvetica-Oblique",
        fontSize: 8.5,
    },
    bullet: {
        marginTop: 1,
    },
});

const noHyphen = (word) => [word];
const text = (style, content) => el(Text, {style, hyphenationCallback: noHyphen}, content);
const link = (href, label) => el(Link, {src: href, style: styles.link}, label);

const job = (title, dates, bullets) => el(
    View,
    {style: styles.job},
    el(
        View,
        {style: styles.jobRow},
        text(styles.jobTitle, title),
        dates ? text(styles.jobDates, dates) : null,
    ),
    ...bullets.filter(Boolean).map((bullet) => text(styles.bullet, bullet)),
);

const experienceBlocks = (bulletCount) => profile.experience.map((entry) => {
    if (entry.kind === "break") {
        return job(entry.text, "", []);
    }
    const bullets = entry.bullets.slice(0, bulletCount).map((bullet) => plainText(bullet));
    return job(`${entry.company} — ${entry.title}`, entry.dates, bullets);
});

const skillLines = profile.keyTechnologies.groups
    .filter((group) => group.items)
    .map((group) => `${group.label}: ${group.items.join(", ")}.`);

const certificationLines = profile.certifications.map((certification) => (
    `${certification.title} — ${certification.issuer}. Issued ${certification.issued.label}. Expires ${certification.expires.label}.`
));

const documentFor = (bulletCount) => el(
    Document,
    {
        title: profile.documentTitle,
        author: profile.name,
        subject: "Curriculum vitae",
    },
    el(
        Page,
        {size: "A4", style: styles.page},
        text(styles.name, profile.name),
        text(styles.headline, profile.hero.title),
        text(styles.meta, profile.hero.subtitle),
        text(styles.meta, profile.hero.location),
        text(styles.meta, profile.languages.fluent),
        el(
            Text,
            {style: styles.contact, hyphenationCallback: noHyphen},
            link(profile.links.email.href, profile.links.email.text),
            "  ·  ",
            link(profile.links.linkedin.href, profile.links.linkedin.text),
            "  ·  ",
            link(profile.links.github.href, profile.links.github.text),
        ),
        el(
            Text,
            {style: styles.contact, hyphenationCallback: noHyphen},
            link(profile.links.kaggle.href, profile.links.kaggle.text),
        ),
        text(styles.section, profile.experienceHeading),
        ...experienceBlocks(bulletCount),
        text(styles.section, profile.education.heading),
        text(styles.bullet, `${profile.education.school} — ${profile.education.credential}.`),
        text(styles.section, profile.keyTechnologies.heading),
        ...skillLines.map((line) => text(styles.bullet, line)),
        text(styles.section, profile.certifications[0].heading),
        ...certificationLines.map((line) => text(styles.bullet, line)),
    ),
);

const pageCount = (filePath) => {
    const raw = readFileSync(filePath).toString("latin1");
    const counts = [...raw.matchAll(/\/Type\s*\/Pages\b[\s\S]{0,300}?\/Count\s+(\d+)/g)];
    if (counts.length === 0) {
        throw new Error(`Could not read the page count of ${filePath}`);
    }
    return Number(counts[counts.length - 1][1]);
};

// Leading bullets only. Prefer two per role when that still fits on one page.
let bulletsPerRole = 2;
await renderToFile(documentFor(bulletsPerRole), outPath);
if (pageCount(outPath) > 1) {
    bulletsPerRole = 1;
    await renderToFile(documentFor(bulletsPerRole), outPath);
}
const pages = pageCount(outPath);
if (pages !== 1) {
    throw new Error(`CV PDF is ${pages} pages; it must stay on one page.`);
}
console.log(`Wrote ${outPath} (${bulletsPerRole} bullet${bulletsPerRole === 1 ? "" : "s"} per role, 1 page)`);

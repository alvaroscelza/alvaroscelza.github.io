/**
 * Builds public/Alvaro-Scelza-CV.pdf from src/data (the same copy the
 * React pages render). `npm run build` runs this first, and `npm run deploy`
 * runs the build, so a deploy publishes a PDF of the current site text.
 *
 * The file is gitignored. It is at most two A4 pages of selectable Helvetica
 * text. Each role contributes the bullets listed in `pdfBulletIndexes`
 * (2–3 for the four most recent roles, 1 for older roles). Headings, dates,
 * education, key technologies, and certifications are the strings from the
 * data, not a second writeup.
 */
import React from "react";
import {readFileSync} from "fs";
import {Document, Font, Link, Page, renderToFile, StyleSheet, Text, View} from "@react-pdf/renderer";
import path from "path";
import {fileURLToPath} from "url";
import profile from "../src/data/profile.mjs";
import {plainText} from "../src/data/plainText.mjs";

Font.registerHyphenationCallback((word) => [word]);

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
        marginBottom: 1,
    },
    contactSecond: {
        marginBottom: 6,
    },
    link: {
        color: "#1a4f8b",
        textDecoration: "underline",
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
    jobTitleWrap: {
        flex: 1,
        paddingRight: 8,
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
    bulletRow: {
        flexDirection: "row",
        marginTop: 1,
    },
    bulletMark: {
        width: 10,
    },
    bulletText: {
        flex: 1,
    },
});

const noHyphen = (word) => [word];
const text = (style, content) => el(Text, {style, hyphenationCallback: noHyphen}, content);
const link = (href, label) => el(Link, {src: href, style: styles.link}, label);

const bulletLine = (content) => el(
    View,
    {style: styles.bulletRow},
    text(styles.bulletMark, "•"),
    text(styles.bulletText, content),
);

const job = (title, dates, bullets) => el(
    View,
    {style: styles.job},
    el(
        View,
        {style: styles.jobRow},
        el(View, {style: styles.jobTitleWrap}, text(styles.jobTitle, title)),
        dates ? text(styles.jobDates, dates) : null,
    ),
    ...bullets.filter(Boolean).map((bullet) => bulletLine(bullet)),
);

const cvBullets = (entry) => {
    const indexes = entry.pdfBulletIndexes;
    if (!Array.isArray(indexes) || indexes.length === 0) {
        throw new Error(`${entry.company} is missing pdfBulletIndexes`);
    }
    return indexes.map((index) => {
        const bullet = entry.bullets[index];
        if (!bullet) {
            throw new Error(`${entry.company} has no bullet at index ${index}`);
        }
        return plainText(bullet);
    });
};

const roles = profile.experience.filter((entry) => entry.kind !== "break");
roles.forEach((entry, index) => {
    const count = entry.pdfBulletIndexes.length;
    const recent = index < 4;
    const fits = recent ? count >= 2 && count <= 3 : count === 1;
    if (!fits) {
        const expected = recent ? "2–3" : "1";
        throw new Error(`${entry.company} must show ${expected} CV bullets; pdfBulletIndexes has ${count}.`);
    }
});

const experienceBlocks = () => profile.experience.map((entry) => {
    if (entry.kind === "break") {
        return job(entry.text, "", []);
    }
    return job(`${entry.company} — ${entry.title}`, entry.dates, cvBullets(entry));
});

const skillLines = profile.keyTechnologies.groups
    .filter((group) => group.items)
    .map((group) => `${group.label}: ${group.items.join(", ")}.`);

const certificationLines = profile.certifications.map((certification) => (
    `${certification.title} — ${certification.issuer}. Issued ${certification.issued.label}. Expires ${certification.expires.label}.`
));

const documentFor = () => el(
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
        ),
        el(
            Text,
            {style: [styles.contact, styles.contactSecond], hyphenationCallback: noHyphen},
            link(profile.links.github.href, profile.links.github.text),
            "  ·  ",
            link(profile.links.kaggle.href, profile.links.kaggle.text),
        ),
        text(styles.section, profile.experienceHeading),
        ...experienceBlocks(),
        el(
            View,
            {wrap: false},
            text(styles.section, profile.education.heading),
            text(styles.bullet, `${profile.education.school} — ${profile.education.credential}.`),
        ),
        el(
            View,
            {wrap: false},
            text(styles.section, profile.keyTechnologies.heading),
            ...skillLines.map((line) => text(styles.bullet, line)),
        ),
        el(
            View,
            {wrap: false},
            text(styles.section, profile.certifications[0].heading),
            ...certificationLines.map((line) => text(styles.bullet, line)),
        ),
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

await renderToFile(documentFor(), outPath);
const pages = pageCount(outPath);
if (pages > 2) {
    throw new Error(`CV PDF is ${pages} pages; keep it to at most two pages.`);
}
console.log(`Wrote ${outPath} (${pages} page${pages === 1 ? "" : "s"})`);

/**
 * Builds public/Alvaro-Scelza-CV.pdf from src/data (the same copy the
 * React pages render). `npm run build` runs this first, and `npm run deploy`
 * runs the build, so a deploy publishes a PDF of the current site text.
 *
 * The file is gitignored. It is selectable Helvetica text, two A4 pages when
 * the recent roles need the extra room. Each role prints the bullets listed
 * in `pdfBulletIndexes` (the first bullet when that field is absent).
 * Headings, dates, education, key technologies, and certifications are the
 * strings from the data, not a second writeup.
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
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 6,
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    contactSep: {
        fontSize: 8.5,
        marginHorizontal: 4,
    },
    link: {
        fontSize: 8.5,
        color: "#1155CC",
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
const link = (href, label) => el(
    Link,
    {src: href, style: styles.link, hyphenationCallback: noHyphen},
    label,
);

const contactItem = (item, leadingSep) => el(
    View,
    {style: styles.contactItem},
    leadingSep ? text(styles.contactSep, "·") : null,
    link(item.href, item.text),
);

const contactLine = (...items) => el(
    View,
    {style: styles.contactRow},
    ...items.map((item, index) => contactItem(item, index > 0)),
);

const block = (...children) => el(View, {wrap: false}, ...children);

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

const bulletText = (entry) => {
    const indexes = entry.pdfBulletIndexes ?? [0];
    return indexes
        .map((index) => entry.bullets[index])
        .filter(Boolean)
        .map((bullet) => `• ${plainText(bullet)}`);
};

const experienceBlocks = () => profile.experience.map((entry) => {
    if (entry.kind === "break") {
        return job(entry.text, "", []);
    }
    return job(`${entry.company} — ${entry.title}`, entry.dates, bulletText(entry));
});

const skillLines = profile.keyTechnologies.groups
    .filter((group) => group.items)
    .map((group) => `${group.label}: ${group.items.join(", ")}.`);

const certificationLines = profile.certifications.map((certification) => (
    `${certification.title} — ${certification.issuer}. Issued ${certification.issued.label}. Expires ${certification.expires.label}.`
));

const document = el(
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
        contactLine(
            profile.links.email,
            profile.links.linkedin,
            profile.links.github,
            profile.links.kaggle,
        ),
        text(styles.section, profile.experienceHeading),
        ...experienceBlocks(),
        block(
            text(styles.section, profile.education.heading),
            text(styles.bullet, `${profile.education.school} — ${profile.education.credential}.`),
        ),
        block(
            text(styles.section, profile.keyTechnologies.heading),
            ...skillLines.map((line) => text(styles.bullet, line)),
        ),
        block(
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

await renderToFile(document, outPath);
const pages = pageCount(outPath);
console.log(`Wrote ${outPath} (${pages} page${pages === 1 ? "" : "s"})`);

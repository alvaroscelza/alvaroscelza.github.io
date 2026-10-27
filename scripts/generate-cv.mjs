/**
 * Regenerates public/Alvaro-Scelza-CV.pdf from the copy in this file.
 *
 * The PDF is committed so the site can link to it without running this
 * during `npm run build`. After the hero, experience, or skills on the
 * site change, update the strings below (facts already on the site only)
 * and run:
 *
 *   npm run generate-cv
 *
 * Then commit public/Alvaro-Scelza-CV.pdf. The file must stay a single
 * page of real text (Helvetica, no images) so it stays ATS-friendly.
 */
import React from "react";
import {Document, Link, Page, renderToFile, StyleSheet, Text, View} from "@react-pdf/renderer";
import path from "path";
import {fileURLToPath} from "url";

const el = React.createElement;
const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "Alvaro-Scelza-CV.pdf");

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
        fontSize: 10,
        marginBottom: 3,
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

const job = (title, dates, bullet) => el(
    View,
    {style: styles.job},
    el(
        View,
        {style: styles.jobRow},
        text(styles.jobTitle, title),
        text(styles.jobDates, dates),
    ),
    text(styles.bullet, bullet),
);

const doc = el(
    Document,
    {
        title: "Alvaro Scelza – Backend & AI Engineer",
        author: "Alvaro Scelza",
        subject: "Curriculum vitae",
    },
    el(
        Page,
        {size: "A4", style: styles.page},
        text(styles.name, "Alvaro Scelza"),
        text(styles.headline, "Backend & AI engineer. Python/AWS, building LLM features in production (Claude, Bedrock, RAG). 10+ years. Currently at Blend360, embedded at Blackstone."),
        text(styles.meta, "Montevideo, Uruguay (UTC-3) · Remote · Italian citizen (EU work authorization)"),
        text(styles.meta, "Fluent in Spanish and English"),
        el(
            Text,
            {style: styles.contact, hyphenationCallback: noHyphen},
            link("mailto:alvaroscelza@gmail.com", "alvaroscelza@gmail.com"),
            "  ·  ",
            link("https://www.linkedin.com/in/ing-alvaro-scelza/", "linkedin.com/in/ing-alvaro-scelza"),
            "  ·  ",
            link("https://github.com/alvaroscelza", "github.com/alvaroscelza"),
        ),
        el(
            Text,
            {style: styles.contact, hyphenationCallback: noHyphen},
            link("https://alvaroscelza.github.io/", "alvaroscelza.github.io"),
            "  ·  ",
            link("https://www.kaggle.com/ingalvaroscelza", "kaggle.com/ingalvaroscelza"),
        ),
        text(styles.section, "Experience"),
        job(
            "Blend360 — Software Engineer",
            "April 2026 – Present",
            "Embedded at Blackstone. Co-created Bifrost, a config-driven platform that lets Claude work across data, API and UI repos, overcoming the single-repo limit of ONA dev environments, with shared team rules and connections to Jira, Confluence and Snowflake. Adopted by the entire ICS team (8 people, from engineers to PMs and design), with 4 other Blackstone teams requesting access or adopting its approach for their own setups. Delivered features across dbt/Snowflake, C#/.NET, React/TypeScript, and AWS/Terraform.",
        ),
        job(
            "Promtior — Full-Cycle Software Engineer · Contract (client engagement)",
            "December 2025 – April 2026",
            "Solo-built a serverless CSV ingestion platform, delivered in two months: 5 Lambdas, S3 streaming, files up to 500k rows, and Bedrock column mapping. Client onboarding went from 40+ hours to 15 minutes. The client then signed an ongoing (initially one-year) engagement; Promtior formed a larger team for it, which I joined.",
        ),
        job(
            "Career break — personal products",
            "Sep–Nov 2025",
            "Built Tabellio (tracks Uruguayan judicial case files and sends a daily email summary) and FinApp (personal finance, fully rebuilt in late 2025).",
        ),
        job(
            "Amoeba AI — Software Engineer · Early-stage startup",
            "April 2025 – August 2025",
            "RAG chat over customer financial data in production (Claude, OpenAI). Reduced the response time of the customer-facing AI chat agent by 40%.",
        ),
        job(
            "Elastic Hotel — FullStack Software Engineer",
            "March 2023 – April 2025",
            "Platform used by hotels generating €263M in revenue. Led the migration from Flask to Django; CI/CD on Terraform and AWS, 30% faster feature deployment. Review-rating model at 87.97% test accuracy. Revenue managers scaled from 4 hotels each to 15.",
        ),
        job(
            "CreateThrive — FullStack Software Engineer",
            "January 2022 – February 2023",
            "Sunpower InstantDesign (solar grids), Convex Labs (Bored Ape Yacht Club), and Kard (payments).",
        ),
        job(
            "Ripio — Team Leader",
            "February 2020 – December 2021",
            "Cryptocurrency platform. Led the OTC team for VIP clients and built the Brazil crypto debit-card API, including payment concurrency control.",
        ),
        job(
            "Banco de Previsión Social — Software Developer",
            "2018 – 2020",
            "Uruguay's social security institution. Government ERP on Odoo and PostgreSQL, plus Python pre-commit checks for Odoo code quality.",
        ),
        job(
            "Universidad ORT Uruguay — Professor of Programming I",
            "August 2018 – December 2018",
            "Taught Programming I with Java, NetBeans, and Scratch.",
        ),
        job(
            "Dirección Nacional de Migración — Technical Support, Software Development",
            "December 2014 – 2018",
            "Backoffice systems for Uruguay's immigration procedures, including Procedures Record v1 (PHP) and v2 (C#/.NET).",
        ),
        text(styles.section, "Education"),
        text(styles.bullet, "Universidad ORT Uruguay — Engineer's degree, Computer Software Engineering (2012–2019)."),
        text(styles.section, "Skills"),
        text(styles.bullet, "Backend: Python, Django, Flask, C#, .NET, PostgreSQL, AWS (Lambda, S3, DynamoDB), Terraform, GitHub Actions."),
        text(styles.bullet, "AI: Claude, Amazon Bedrock, retrieval-augmented generation (RAG), OpenAI."),
        text(styles.bullet, "Also in production work: React, JavaScript, TypeScript, Snowflake, dbt."),
    ),
);

await renderToFile(doc, outPath);
console.log(`Wrote ${outPath}`);

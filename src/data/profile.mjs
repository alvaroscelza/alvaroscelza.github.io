import experience from "./experience.mjs";

/**
 * Copy the site renders. The CV PDF is built from this module during
 * `npm run build`. Edit the text here; do not keep a second copy for the PDF.
 */
const profile = {
    name: "Alvaro Scelza",
    documentTitle: "Alvaro Scelza – Backend & AI Engineer",
    cvFileName: "Alvaro-Scelza-CV.pdf",
    hero: {
        title: "Backend & AI Engineer",
        subtitle: "Python/AWS, building LLM features in production (Claude, Bedrock, RAG). 10+ years. Currently at Blend360, embedded at Blackstone.",
        location: "Montevideo, Uruguay (UTC-3) · Remote · Italian citizen (EU work authorization)",
        highlights: [
            {
                link: "/experience?role=promtior",
                text: "Solo-built serverless CSV ingestion at Promtior: 5 Lambdas, S3 streaming, up to 500k rows per file, Bedrock column mapping.",
            },
            {
                link: "/experience?role=amoeba",
                text: "RAG chat over customer financial data in production at Amoeba AI (Claude, OpenAI).",
            },
            {
                link: "/experience?role=blend360",
                text: "Co-created Bifrost, a config-driven platform that lets Claude work across data, API and UI repos at Blackstone.",
            },
        ],
    },
    links: {
        email: {href: "mailto:alvaroscelza@gmail.com", text: "alvaroscelza@gmail.com"},
        github: {href: "https://github.com/alvaroscelza", text: "https://github.com/alvaroscelza"},
        linkedin: {href: "https://www.linkedin.com/in/ing-alvaro-scelza/", text: "https://www.linkedin.com/in/ing-alvaro-scelza/"},
        kaggle: {href: "https://www.kaggle.com/ingalvaroscelza", text: "https://www.kaggle.com/ingalvaroscelza", label: "Kaggle"},
        calendar: {href: "https://calendar.app.google/vKUuMw3BbaUW2Qwx7", text: "Schedule an interview"},
    },
    languages: {
        citizenship: "Uruguayan & Italian citizen",
        fluent: "Fluent in Spanish & English",
        relocation: "Open to relocation",
    },
    education: {
        heading: "Education",
        school: "Universidad ORT Uruguay",
        credential: "Engineer's degree, Computer Software Engineering (2012 – 2019)",
    },
    keyTechnologies: {
        heading: "Key Technologies",
        groups: [
            {label: "Backend", items: ["Python", "Django", "Flask", "C#/.NET", "Node.js", "Dapper"]},
            {label: "AI / LLMs", items: ["Claude", "OpenAI", "Bedrock", "RAG"]},
            {label: "Data", items: ["dbt", "Snowflake", "Fivetran"]},
            {label: "Frontend", items: ["React", "JavaScript", "TypeScript"]},
            {label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Flyway"]},
            {label: "Cloud", items: ["AWS", "Lambda", "S3", "DynamoDB", "Azure", "GCP"]},
            {label: "DevOps", items: ["Terraform", "Docker", "GitHub Actions"]},
            {label: "More", link: "/knowledge", linkText: "View all skills & technologies"},
        ],
    },
    certifications: [
        {
            heading: "Certifications",
            title: "Claude Partner Badge - Claude Code",
            image: "/static/images/claude-partner-badge-claude-code.png",
            imageAlt: "Claude Partner Badge - Claude Code, issued by Anthropic",
            imageWidth: 672,
            imageHeight: 352,
            url: "https://www.credly.com/badges/cab05229-af31-4de6-969c-9ef3bea12247/public_url",
            issuer: "Anthropic, via Credly",
            issued: {dateTime: "2026-10-27", label: "Oct 27, 2026"},
            expires: {dateTime: "2027-04-27", label: "Apr 27, 2027"},
            description: "Earned through an 8-course learning path and a capstone assessment covering scoping, deploying, configuring, and running Claude Code activations (configuration packs, custom commands, Skills, hooks, and telemetry).",
            linkText: "View badge on Credly",
        },
    ],
    experienceHeading: "Experience",
    experience,
};

export default profile;

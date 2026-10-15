import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const blend360Technologies =
    <ExperienceTechnologies>
        dbt, Snowflake, C#, .NET, React, TypeScript, AWS, Terraform, Sigma, GitLab, Claude, ONA, Jira, Confluence, Agentic AI
        <br/>
        <br/>
        April 2026 - Present
    </ExperienceTechnologies>

const blend360Description =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Embedded with <strong>Blackstone (BX)</strong>, a leading global investment firm, as a <strong>Full-Cycle Engineer</strong> with high autonomy and full ownership of each feature end to end: requirements gathering, data, API, UI and infrastructure.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Week 2</div>
                <div className={classes.metricLabel}>First MRs</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Fullstack</div>
                <div className={classes.metricLabel}>DBT, API, UI</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Bifrost</div>
                <div className={classes.metricLabel}>Own-initiative AI</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Blackstone</div>
                <div className={classes.metricLabel}>Client: BX</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🎯</span>
                <span>Ownership and Initiative</span>
            </div>
            <p className={classes.contributionDescription}>
                Combined ownership of assigned work with self-driven initiative. Beyond delivering my tasks, I proactively identify and build improvements to how the team works.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Full-Cycle</span>
                <span className={classes.techTag}>Ownership</span>
                <span className={classes.techTag}>Initiative</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>⚡</span>
                <span>dbt from Scratch</span>
            </div>
            <p className={classes.contributionDescription}>
                Learned <strong>dbt from scratch</strong> while building features with it. With AI support, I shipped my <strong>first merge requests in my second week</strong>.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>dbt</span>
                <span className={classes.techTag}>Snowflake</span>
                <span className={classes.techTag}>GitLab</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🧩</span>
                <span>Full-Stack Feature Delivery</span>
            </div>
            <p className={classes.contributionDescription}>
                Delivered features across the full stack: <strong>data models</strong> (dbt, Snowflake), <strong>APIs</strong> (C#/.NET), <strong>UI</strong> (React, TypeScript) and <strong>infrastructure</strong> (AWS, Terraform).
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>dbt</span>
                <span className={classes.techTag}>Snowflake</span>
                <span className={classes.techTag}>C#</span>
                <span className={classes.techTag}>.NET</span>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>TypeScript</span>
                <span className={classes.techTag}>AWS</span>
                <span className={classes.techTag}>Terraform</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔍</span>
                <span>User-Focused Delivery</span>
            </div>
            <p className={classes.contributionDescription}>
                Drove user-focused delivery: instead of asking “what do I have to build?”, I ask “what questions would a user want answered when looking at this feature?”
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Requirements</span>
                <span className={classes.techTag}>Product Ownership</span>
                <span className={classes.techTag}>User-Centered</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤖</span>
                <span>Bifrost - Cross-Repo AI Platform</span>
            </div>
            <p className={classes.contributionDescription}>
                Co-created <strong>Bifrost</strong> on my own initiative (not an assigned task): a <strong>config-driven platform</strong> that lets Claude work across every repo a feature needs (data, API and UI), overcoming the <strong>single-repo limit</strong> of our ONA dev environments. It also keeps personal Claude preferences across environments, defines shared team rules, and connects to Jira, Confluence and Snowflake.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Bifrost</span>
                <span className={classes.techTag}>Claude</span>
                <span className={classes.techTag}>ONA</span>
                <span className={classes.techTag}>Jira</span>
                <span className={classes.techTag}>Confluence</span>
                <span className={classes.techTag}>Snowflake</span>
                <span className={classes.techTag}>Agentic AI</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🚀</span>
                <span>Team Release Coordination</span>
            </div>
            <p className={classes.contributionDescription}>
                Coordinated team releases: the Jira release issue, tracking each teammate&apos;s tasks, pipeline sign-off, and release approval from the development lead.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Jira</span>
                <span className={classes.techTag}>GitLab</span>
                <span className={classes.techTag}>Releases</span>
            </div>
        </div>

        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                <strong>Impact:</strong> Brought product ownership and self-direction to a high-stakes financial services client, turning a tooling limitation into a team-wide AI platform and shipping user-centered features end to end.
            </p>
        </div>
    </VisualExperience>;

export {blend360Technologies, blend360Description};

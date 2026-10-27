import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const blend360Technologies =
    <ExperienceTechnologies>
        dbt, Snowflake, C#, .NET, React, JavaScript, TypeScript, Amazon Web Services (AWS), Terraform, Sigma, GitLab, Claude, ONA, Jira, Confluence, Agentic AI, Citrix
        <br/>
        <br/>
        April 2026 - Present
    </ExperienceTechnologies>

const blend360Description =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Embedded at <strong>Blackstone</strong> through <strong>Blend360</strong> (Fortune 500 clients, AWS Premier Tier Services Partner, Snowflake Premier Partner). I own each feature from requirements through data, API, UI, and infrastructure.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Bifrost</div>
                <div className={classes.metricLabel}>ICS team of 8; 4 other Blackstone teams</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Fullstack</div>
                <div className={classes.metricLabel}>DBT, API, UI</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Blackstone</div>
                <div className={classes.metricLabel}>Client: Blackstone</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Week 2</div>
                <div className={classes.metricLabel}>First MRs</div>
            </div>
        </div>

        <ul className={classes.bulletList}>
            <li>
                Co-created <strong>Bifrost</strong> on my own initiative: a config-driven platform that lets Claude work across the data, API, and UI repos a feature needs, past the single-repo limit of our ONA dev environments. It sets shared team rules, connects to Jira, Confluence, and Snowflake, and an automation I built on ONA&apos;s dotfiles loads each developer&apos;s Claude config from a private repo (isolated per person, editable with Claude, versioned). Adopted by the entire ICS team (8 people, from engineers to PMs and design), with 4 other Blackstone teams requesting access or adopting its approach for their own setups.
            </li>
            <li>
                Delivered features across data models (<strong>dbt</strong>, <strong>Snowflake</strong>), APIs (<strong>C#/.NET</strong>), UI (<strong>React</strong>, <strong>TypeScript</strong>), and infrastructure (<strong>AWS</strong>, <strong>Terraform</strong>).
            </li>
            <li>
                Learned <strong>dbt</strong> from scratch while building with it. With AI support, I shipped my first merge requests in week 2.
            </li>
            <li>
                Coordinated team releases: the Jira release issue, each teammate&apos;s tasks, pipeline sign-off, and approval from the development lead.
            </li>
        </ul>
    </VisualExperience>;

export {blend360Technologies, blend360Description};

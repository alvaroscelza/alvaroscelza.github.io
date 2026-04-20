import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const blend360Technologies =
    <ExperienceTechnologies>
        Citrix, Gitlab, DBT, Machine Learning, AI
        <br/>
        <br/>
        April 2026 - Present
    </ExperienceTechnologies>

const blend360Description =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Software Engineer at <strong>Blend360</strong>, a professional services firm that partners with Fortune 1000 and large enterprise teams on <strong>AI strategy, data, analytics, and agentic deployment</strong>—embedding engineering alongside clients to move initiatives from concept to production.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>F1000</div>
                <div className={classes.metricLabel}>Client Context</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>AI & Data</div>
                <div className={classes.metricLabel}>Focus Areas</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Enterprise</div>
                <div className={classes.metricLabel}>Delivery Scale</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>BlendX</div>
                <div className={classes.metricLabel}>Agentic AI Foundry</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏢</span>
                <span>Enterprise Delivery</span>
            </div>
            <p className={classes.contributionDescription}>
                Contributing to client engagements where reliability, security, and clarity matter: translating requirements into maintainable software, aligning with enterprise standards, and shipping incrementally in close coordination with stakeholders and partner teams.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Citrix</span>
                <span className={classes.techTag}>Gitlab</span>
                <span className={classes.techTag}>Enterprise delivery</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📊</span>
                <span>Data & AI Engineering</span>
            </div>
            <p className={classes.contributionDescription}>
                Supporting solutions in Blend360&apos;s core lanes—<strong>data engineering, analytics, and AI/ML delivery</strong>—with emphasis on practical integration, quality, and operability so client systems remain understandable and evolvable after handoff.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>DBT</span>
                <span className={classes.techTag}>Machine Learning</span>
                <span className={classes.techTag}>AI</span>
            </div>
        </div>

        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                <strong>Context:</strong> Blend360 operates globally across industries (e.g. financial services, healthcare, retail, tech/media/telecom) with deep partnerships including <strong>AWS Premier</strong> and <strong>Snowflake Premier</strong> status—reflecting the kind of enterprise environment this role sits in.
            </p>
        </div>
    </VisualExperience>;

export {blend360Technologies, blend360Description};

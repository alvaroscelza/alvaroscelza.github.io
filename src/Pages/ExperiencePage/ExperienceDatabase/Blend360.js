import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const blend360Technologies =
    <ExperienceTechnologies>
        Citrix, Gitlab, DBT, C#, APIs, Frontend, Sigma, Machine Learning, AI
        <br/>
        <br/>
        April 2026 - Present
    </ExperienceTechnologies>

const blend360Description =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Software Engineer at <strong>Blend360</strong>, a professional services firm that partners with Fortune 1000 and large enterprise teams on <strong>AI strategy, data, analytics, and agentic deployment</strong>—embedding engineering alongside clients to move initiatives from concept to production. Currently embedded with <strong>Blackstone (BX)</strong>, a leading global investment firm, working on the ICS team delivering fullstack solutions across the data and AI stack.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Blackstone</div>
                <div className={classes.metricLabel}>Client: BX</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>ICS Team</div>
                <div className={classes.metricLabel}>Fullstack Role</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>dbt → Full</div>
                <div className={classes.metricLabel}>Tech Evolution</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Bifrost</div>
                <div className={classes.metricLabel}>Agentic AI</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏦</span>
                <span>Blackstone (BX) - ICS Team</span>
            </div>
            <p className={classes.contributionDescription}>
                Embedded with <strong>Blackstone</strong>, a leading global investment firm. Initially focused on <strong>dbt data transformation</strong> work (April - October 8, 2026). Since October 8, transitioned to the <strong>ICS (Infrastructure and Cloud Services) team</strong> working fullstack across the entire data and AI technology stack: <strong>dbt for data engineering, C# APIs for backend services, frontend development, and Sigma for analytics</strong>. Contributing to enterprise-grade solutions in a high-stakes financial services environment where reliability, security, and clarity are paramount.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Blackstone</span>
                <span className={classes.techTag}>dbt</span>
                <span className={classes.techTag}>C#</span>
                <span className={classes.techTag}>APIs</span>
                <span className={classes.techTag}>Frontend</span>
                <span className={classes.techTag}>Sigma</span>
                <span className={classes.techTag}>Financial Services</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤖</span>
                <span>Bifrost & ONA - AI/Agentic Systems</span>
            </div>
            <p className={classes.contributionDescription}>
                {/* TODO: Add detailed description of Bifrost collaboration and configurable personal preferences for Claude inside ONA. 
                    This is a key achievement that needs proper context and metrics once provided by Alvaro.
                    For now, placeholder text: */}
                Collaborating on building <strong>&apos;Bifrost&apos;</strong> and introducing <strong>configurable personal preferences for Claude inside ONA</strong> (Organizational Network Assistant). This work represents a significant contribution to agentic AI systems within the Blackstone engagement.
                <br/><br/>
                <strong>TODO:</strong> Detailed achievement description, metrics, and technical context to be added.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Bifrost</span>
                <span className={classes.techTag}>ONA</span>
                <span className={classes.techTag}>Claude</span>
                <span className={classes.techTag}>Agentic AI</span>
                <span className={classes.techTag}>Configurable Preferences</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏢</span>
                <span>Enterprise Delivery Standards</span>
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

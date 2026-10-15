import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const blend360Technologies =
    <ExperienceTechnologies>
        Citrix, Gitlab, DBT, C#, Sigma, AI, Snowflake, Claude, ONA, .NET, Amazon Web Services (AWS), React, JavaScript, TypeScript, Terraform
        <br/>
        <br/>
        April 2026 - Present
    </ExperienceTechnologies>

const blend360Description =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Software Engineer at <strong>Blend360</strong>, a professional services firm that partners with Fortune 1000 and large enterprise teams on <strong>AI strategy, data, analytics, and agentic deployment</strong>—embedding engineering alongside clients to move initiatives from concept to production. Currently embedded with <strong>Blackstone (BX)</strong>, a leading global investment firm, working on the Institutional Client Services (ICS) team delivering fullstack solutions across the data and AI stack.
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
                <div className={classes.metricValue}>Fullstack</div>
                <div className={classes.metricLabel}>DBT, API, UI</div>
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
                Embedded with <strong>Blackstone</strong>, a leading global investment firm. Initially focused on <strong>dbt data transformation</strong> work (April - September 2026). Since September 2026, transitioned to the <strong>ICS team</strong> working fullstack across the entire data and AI technology stack: <strong>dbt for data engineering, C# APIs for backend services, frontend development, and Sigma for analytics</strong>. Contributing to enterprise-grade solutions in a high-stakes financial services environment where reliability, security, and clarity are paramount.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Blackstone</span>
                <span className={classes.techTag}>dbt</span>
                <span className={classes.techTag}>C#</span>
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
                Collaborated on building <strong>Bifrost</strong>, an internal platform using Claude inside ONA development environments. Discovered and validated that <strong>ONA&apos;s dotfiles bootstrap configuration enables versioned personal Claude preferences</strong> (personal claude.md files) in Bifrost, shared a reference repository for team adoption, and documented a critical scoping pitfall: because claude.md files are appended into context without origin tracking, repo-scoped rules in personal configurations can leak into Bifrost&apos;s scope.
                <br/><br/>
                {/* TODO: Additional Blend360 project details and achievements to be added */}
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Bifrost</span>
                <span className={classes.techTag}>ONA</span>
                <span className={classes.techTag}>Claude</span>
                <span className={classes.techTag}>Dotfiles</span>
                <span className={classes.techTag}>Dev Environments</span>
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

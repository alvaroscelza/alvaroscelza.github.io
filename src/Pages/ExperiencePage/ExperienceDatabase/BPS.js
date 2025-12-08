import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";
import ExternalLink from "../../../components/UI/ExternalLink";

const bpsTechnologies =
    <ExperienceTechnologies>
        Python, Odoo, PostgreSQL, Design Thinking
        <br/>
        <br/>
        2018 to 2020 - 2 years
    </ExperienceTechnologies>

const bpsDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Worked at <strong>Banco de Previsión Social (BPS)</strong>, Uruguay's social security institution, developing and maintaining critical government systems including a large-scale ERP solution and process improvement initiatives.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>2</div>
                <div className={classes.metricLabel}>Years</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Gov.</div>
                <div className={classes.metricLabel}>ERP System</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Odoo</div>
                <div className={classes.metricLabel}>Platform</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Process</div>
                <div className={classes.metricLabel}>Improvement</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏛️</span>
                <span>GRP - Gov. ERP System</span>
            </div>
            <p className={classes.contributionDescription}>
                Dedicated two years to <strong>Project GRP</strong>, a governmental <ExternalLink link="https://en.wikipedia.org/wiki/Enterprise_resource_planning" text="ERP"/> system built using <ExternalLink link="https://www.odoo.com/" text="Odoo"/>. This large-scale system managed critical social security operations and required extensive customization and maintenance of the Odoo platform to meet government requirements.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Odoo</span>
                <span className={classes.techTag}>ERP</span>
                <span className={classes.techTag}>Python</span>
                <span className={classes.techTag}>PostgreSQL</span>
                <span className={classes.techTag}>Gov. Systems</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔍</span>
                <span>Pre-Commit Hooks - Code Quality Automation</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed automated code quality checks using <strong>Python pre-commit hooks</strong> to enforce Odoo framework best practices and PEP8 standards. Created a battery of scripts that execute automatically on each commit, significantly reducing manual code review time. This solution addressed the lack of static code analysis tools for Odoo framework, improving development efficiency and code consistency across the team.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Pre-commit</span>
                <span className={classes.techTag}>Code Quality</span>
                <span className={classes.techTag}>Automation</span>
                <span className={classes.techTag}>Python</span>
                <span className={classes.techTag}>Git Hooks</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤝</span>
                <span>SDES Conectados - Design Thinking Initiative</span>
            </div>
            <p className={classes.contributionDescription}>
                Participated in the <strong>SDES Conectados</strong> project, aimed at connecting all departments depending on the Software Development Services Department. Applied <strong>Design Thinking methodology</strong> to improve inter-departmental collaboration and processes, leveraging my knowledge and experience in this methodology.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Design Thinking</span>
                <span className={classes.techTag}>Process Improvement</span>
                <span className={classes.techTag}>Collaboration</span>
            </div>
        </div>
    </VisualExperience>;

export {bpsTechnologies, bpsDescription};


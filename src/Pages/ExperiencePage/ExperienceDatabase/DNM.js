import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const dnmTechnologies =
    <ExperienceTechnologies>
        PHP, Smarty, MySQL, C#, .NET, Microsoft SQL Server
        <br/>
        <br/>
        December 2014 to 2018
    </ExperienceTechnologies>

const dnmDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Provided technical support with software development for <strong>Dirección Nacional de Migración (DNM)</strong>, the governmental agency that handles all of Uruguay's immigration procedures. Built two versions of a backoffice system to manage and track immigration procedures.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>~3</div>
                <div className={classes.metricLabel}>Years</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Gov.</div>
                <div className={classes.metricLabel}>Immigration</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Backoffice</div>
                <div className={classes.metricLabel}>Management System</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>v2</div>
                <div className={classes.metricLabel}>Version Upgrade</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📋</span>
                <span>Procedures Record v2</span>
            </div>
            <p className={classes.contributionDescription}>
                In <strong>February 2017</strong>, implemented the second version of the Procedures Record system, solving several shortages from the previous version, including UI improvements and enhanced functionality for better procedure management.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>C#</span>
                <span className={classes.techTag}>.NET</span>
                <span className={classes.techTag}>SQL Server</span>
                <span className={classes.techTag}>Gov. Systems</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📋</span>
                <span>Procedures Record v1</span>
            </div>
            <p className={classes.contributionDescription}>
                In <strong>August 2016</strong>, built a backoffice website for managing all immigration procedures performed by DNM. The system allowed comprehensive tracking and management of procedures.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>PHP</span>
                <span className={classes.techTag}>Smarty</span>
                <span className={classes.techTag}>MySQL</span>
                <span className={classes.techTag}>Gov. Systems</span>
            </div>
        </div>
    </VisualExperience>;

export {dnmTechnologies, dnmDescription};


import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const professorTechnologies =
    <ExperienceTechnologies>
        Teaching, Team Leadership, Leadership Development, University Teaching, University Lecturing, Universities, Java, NetBeans, Scratch
        <br/>
        <br/>
        August 2018 to December 2018 (5 months)
    </ExperienceTechnologies>

const professorDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Served as <strong>Professor of Programming I</strong> at <strong>Universidad ORT Uruguay</strong>, teaching fundamental programming concepts and practices to university students.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>5</div>
                <div className={classes.metricLabel}>Months</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>University</div>
                <div className={classes.metricLabel}>Teaching</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Java</div>
                <div className={classes.metricLabel}>Programming I</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Leadership</div>
                <div className={classes.metricLabel}>Development</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📚</span>
                <span>Programming Education</span>
            </div>
            <p className={classes.contributionDescription}>
                Taught <strong>Programming I</strong> course covering fundamental programming concepts using <strong>Java</strong> and <strong>NetBeans</strong>. Also introduced students to <strong>Scratch</strong> for visual programming concepts. Focused on developing students' problem-solving skills and foundational programming knowledge.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Java</span>
                <span className={classes.techTag}>NetBeans</span>
                <span className={classes.techTag}>Scratch</span>
                <span className={classes.techTag}>Teaching</span>
            </div>
        </div>
    </VisualExperience>;

export {professorTechnologies, professorDescription};


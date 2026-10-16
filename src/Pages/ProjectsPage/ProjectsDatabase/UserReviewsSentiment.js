import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const sentimentTechnologies =
    <ExperienceTechnologies>
        Python, Machine Learning, NLP, Jupyter
    </ExperienceTechnologies>

const sentimentDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Machine learning model from hotel-industry review work. The notebook is titled "Hotel's Reviews Sentiment Analysis" and classifies review sentiment from title, text, and score. The README reports 91.68% training accuracy and 87.97% test accuracy. The reviews file is not committed, to safeguard the data.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>91.68%</div>
                <div className={classes.metricLabel}>Training accuracy</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>87.97%</div>
                <div className={classes.metricLabel}>Test accuracy</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏨</span>
                <span>Hotel review sentiment</span>
            </div>
            <p className={classes.contributionDescription}>
                Classifies the sentiment of hotel user reviews. The notebook gathers review title, text, and score, then trains on that text. It is a Jupyter notebook in Python.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Python</span>
                <span className={classes.techTag}>Machine Learning</span>
                <span className={classes.techTag}>NLP</span>
                <span className={classes.techTag}>Jupyter</span>
            </div>
        </div>
    </VisualExperience>;

export {sentimentTechnologies, sentimentDescription};

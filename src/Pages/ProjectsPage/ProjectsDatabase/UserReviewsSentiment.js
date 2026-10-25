import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const sentimentTechnologies =
    <ExperienceTechnologies>
        Python, scikit-learn, pandas, Jupyter
    </ExperienceTechnologies>

const sentimentDescription =
    <VisualExperience>
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

        <ul className={classes.bulletList}>
            <li>
                I trained a bag-of-words model on hotel reviews from industry work. <strong>CountVectorizer</strong> (scikit-learn defaults) plus <strong>LogisticRegression</strong> (<strong>max_iter=1500</strong>, lbfgs, stopped at the iteration limit) predicts the 1–5 score from the translated title and text.
            </li>
            <li>
                I concatenate title and body, drop empty reviews, and ceil scores outside 1–5. The split is 80/20 with <strong>random_state=42</strong>. Training accuracy is <strong>91.68%</strong>. Test accuracy is <strong>87.97%</strong> on 74,084 reviews. Scores 4 and 5 are most of that test set. Macro F1 is 0.85.
            </li>
            <li>
                <strong>reviews.json</strong> stays out of the repo (<strong>.gitignore</strong> also lists reviews.csv). <strong>requirements.txt</strong> pins TensorFlow as well; the saved notebook run is the logistic regression, not a neural net.
            </li>
        </ul>
    </VisualExperience>;

export {sentimentTechnologies, sentimentDescription};

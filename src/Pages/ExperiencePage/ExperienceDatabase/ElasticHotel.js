import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const elasticHotelTechnologies =
    <ExperienceTechnologies>
        Python, Django, Flask, PostgreSQL, DevOps, Terraform, AWS, Azure, GitHub, Git, Jira, JavaScript, Machine Learning, Google Colab, DataSpell, Kaggle, OpenAI, ChatGPT
        <br/>
        <br/>
        March 2023 to April 2025 - 2 years 2 months
    </ExperienceTechnologies>

const elasticHotelDescription =
    <VisualExperience>
        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>€263M</div>
                <div className={classes.metricLabel}>Revenue of hotels on the platform</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>30%</div>
                <div className={classes.metricLabel}>Faster Deployment</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>86%</div>
                <div className={classes.metricLabel}>ML Model Accuracy</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>4→15</div>
                <div className={classes.metricLabel}>Hotels per Manager</div>
            </div>
        </div>

        <ul className={classes.bulletList}>
            <li>
                With two other developers, built on Elastic Hotel&apos;s revenue platform for European hotels (dynamic pricing and analytics, including Kondo OS). The platform is used by hotels generating over <strong>€263M</strong> in revenue.
            </li>
            <li>
                Proposed and led the move from <strong>Flask</strong> to <strong>Django</strong> (Django-React) on the monolith. CI/CD on <strong>Terraform</strong> and <strong>AWS</strong> made the feature deployment cycle <strong>30% faster</strong>.
            </li>
            <li>
                Built a review-rating model at <strong>86% accuracy</strong> and added it to the analytics suite, then further models for data normalization and demand forecasting.
            </li>
            <li>
                Revenue managers went from <strong>4 hotels each to 15</strong> after the automation and forecasting work.
            </li>
        </ul>
    </VisualExperience>;

export {elasticHotelTechnologies, elasticHotelDescription};


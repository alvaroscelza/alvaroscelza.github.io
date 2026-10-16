import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const djangoTemplateTechnologies =
    <ExperienceTechnologies>
        Python, Django, PostgreSQL, uv, React, Webpack
        <br/>
        <br/>
        Reusable starter. First published in 2021.
    </ExperienceTechnologies>

const djangoTemplateDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Reusable starter for Django MVC projects, maintained since 2021. The repository description is "Basic project setup for Django MVC project."
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>2021</div>
                <div className={classes.metricLabel}>First published</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>3.13</div>
                <div className={classes.metricLabel}>Python</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>5</div>
                <div className={classes.metricLabel}>Django</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>17</div>
                <div className={classes.metricLabel}>PostgreSQL</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🐍</span>
                <span>Django stack</span>
            </div>
            <p className={classes.contributionDescription}>
                Python 3.13, Django 5, and PostgreSQL 17. Dependencies are managed with uv (<code>pyproject.toml</code> and an optional <code>uv.lock</code>) instead of pip. <code>uv run</code> uses the project virtualenv without activating it.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Python</span>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>PostgreSQL</span>
                <span className={classes.techTag}>uv</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>⚛️</span>
                <span>React frontend via webpack</span>
            </div>
            <p className={classes.contributionDescription}>
                The webpack dev server watches React files in <code>src/</code> and hot-reloads the browser. API calls are proxied from <code>localhost:3000</code> to the Django server on <code>localhost:8000</code>.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>Webpack</span>
            </div>
        </div>
    </VisualExperience>;

export {djangoTemplateTechnologies, djangoTemplateDescription};

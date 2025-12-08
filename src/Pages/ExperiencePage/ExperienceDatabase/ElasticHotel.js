import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const elasticHotelTechnologies =
    <ExperienceTechnologies>
        Python, Django, Flask, PostgreSQL, DevOps, Terraform, AWS, Azure, GitHub, Git, Jira, JavaScript, Machine Learning, Google Collab, DataSpell, Kaggle, OpenAI, ChatGPT
        <br/>
        <br/>
        March 2023 to April 2025 - 2 years 2 months
    </ExperienceTechnologies>

const elasticHotelDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                As a core Software Engineer at <strong>Elastic Hotel</strong>—a leading revenue management platform for European hotels, powering dynamic pricing, demand optimization, and analytics via AI-driven tools like Kondo OS—I collaborated with a compact team of two fellow developers to build and scale systems that have generated over <strong>€263M in client revenue</strong>, enabling hoteliers to focus on guest experiences through automated forecasting and performance insights.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>€263M</div>
                <div className={classes.metricLabel}>Client Revenue Generated</div>
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

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔄</span>
                <span>Platform Migration & Architecture</span>
            </div>
            <p className={classes.contributionDescription}>
                Proposed and led the migration from <strong>Flask to Django</strong> for our monolithic application, adopting a <strong>Django-React architecture</strong> to enhance modularity. Optimized the CI/CD pipeline using <strong>Terraform and AWS</strong>, resulting in a <strong>30% faster feature deployment cycle</strong> and improved scalability for handling high-volume hospitality data.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>Terraform</span>
                <span className={classes.techTag}>AWS</span>
                <span className={classes.techTag}>CI/CD</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤖</span>
                <span>AI/ML Model Development</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed an <strong>AI/ML model for user review analysis</strong>, achieving <strong>86% accuracy</strong> in rating predictions and integrating it into the analytics suite to inform revenue strategies. This ignited my expertise in machine learning, which I've since applied to additional models for data normalization and demand forecasting.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Machine Learning</span>
                <span className={classes.techTag}>AI Models</span>
                <span className={classes.techTag}>Data Analysis</span>
                <span className={classes.techTag}>Predictive Analytics</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📊</span>
                <span>Revenue Optimization & Integration</span>
            </div>
            <p className={classes.contributionDescription}>
                Contributed cross-functionally to the core platform, ensuring seamless integration of AI tools with revenue management workflows. The automation and intelligence improvements enabled revenue managers to scale from managing <strong>4 hotels each to 15 hotels each</strong>, dramatically increasing operational efficiency through precise, data-driven optimizations.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Revenue Management</span>
                <span className={classes.techTag}>Data-Driven Optimization</span>
                <span className={classes.techTag}>Workflow Integration</span>
                <span className={classes.techTag}>Automation</span>
                <span className={classes.techTag}>Operational Efficiency</span>
            </div>
        </div>
    </VisualExperience>;

export {elasticHotelTechnologies, elasticHotelDescription};


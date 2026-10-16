import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const finAppTechnologies =
    <ExperienceTechnologies>
        JavaScript, Supabase, Vercel
        <br/>
        <br/>
        Worked on for years. Fully rebuilt in late 2025.
    </ExperienceTechnologies>

const finAppDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Personal finance and investment management system, worked on for years and fully rebuilt in late 2025. The public page is in English. Its document title is "FinApp - Gestión Financiera" and the sign-in line is "Manage your finances smarter."
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>2025</div>
                <div className={classes.metricLabel}>Full rebuild</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Google</div>
                <div className={classes.metricLabel}>Sign-in only</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Personal</div>
                <div className={classes.metricLabel}>Finance and investments</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📈</span>
                <span>Personal finance and investments</span>
            </div>
            <p className={classes.contributionDescription}>
                A system for managing personal finances and investments. The public site does not describe features beyond the tagline; the product is behind sign-in.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>JavaScript</span>
                <span className={classes.techTag}>Supabase</span>
                <span className={classes.techTag}>Vercel</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔐</span>
                <span>Sign in with Google</span>
            </div>
            <p className={classes.contributionDescription}>
                The only public screen is login. It offers "Sign in with Google" and states that currently only Google authentication is supported. Other routes, including /dashboard, return to that screen.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Google sign-in</span>
                <span className={classes.techTag}>Login-only</span>
            </div>
        </div>
    </VisualExperience>;

export {finAppTechnologies, finAppDescription};

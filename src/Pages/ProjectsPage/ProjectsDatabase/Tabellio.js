import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const tabellioTechnologies =
    <ExperienceTechnologies>
        TypeScript, React, Supabase
    </ExperienceTechnologies>

const tabellioDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Personal project that automatically tracks judicial case files (expedientes) from Uruguay's Judicial Branch (Poder Judicial) and sends a daily summary by email. Offered as a free service, with 8 active users. The public site is in Spanish.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>8</div>
                <div className={classes.metricLabel}>Active users</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Free</div>
                <div className={classes.metricLabel}>Service</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Daily</div>
                <div className={classes.metricLabel}>Email summary</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Uruguay</div>
                <div className={classes.metricLabel}>Judicial Branch</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📂</span>
                <span>Automatic case-file tracking</span>
            </div>
            <p className={classes.contributionDescription}>
                Follows expedientes from the Poder Judicial. The public page shows files in follow-up ("En seguimiento"), with the latest movement and a note when a file remains reserved ("El expediente mantiene reserva"). Headline on the site: "Expedientes al día, sin perseguirlos."
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>TypeScript</span>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>Supabase</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>✉️</span>
                <span>Daily email summary</span>
            </div>
            <p className={classes.contributionDescription}>
                Sends a daily summary by email. The site states: "Seguimos tus expedientes del Poder Judicial y te mandamos un resumen diario por email." The footer calls it "Gestión de expedientes judiciales en Uruguay."
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Daily email</span>
                <span className={classes.techTag}>Poder Judicial</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔐</span>
                <span>Google sign-in</span>
            </div>
            <p className={classes.contributionDescription}>
                The public page is a sign-in screen ("Ingresar con Google"). On a first visit, Tabellio creates the account and notifies the user when it is ready. The product itself is behind sign-in.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Google sign-in</span>
                <span className={classes.techTag}>Spanish</span>
            </div>
        </div>
    </VisualExperience>;

export {tabellioTechnologies, tabellioDescription};

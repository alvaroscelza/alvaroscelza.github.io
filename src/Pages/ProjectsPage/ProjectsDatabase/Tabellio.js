import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const tabellioTechnologies =
    <ExperienceTechnologies>
        TypeScript, React, Supabase
    </ExperienceTechnologies>

const tabellioDescription =
    <VisualExperience>
        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>8</div>
                <div className={classes.metricLabel}>Active users</div>
            </div>
        </div>

        <ul className={classes.bulletList}>
            <li>
                I track expedientes from Uruguay&apos;s Poder Judicial. For each file I follow, I keep the latest movement and flag it when it is still under reserve.
            </li>
            <li>
                A daily job emails a digest of those files. The service is free and has 8 active users.
            </li>
            <li>
                Stack is <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Supabase</strong>. Sign-in is Google. On a first visit I create the account and notify the user when it is ready.
            </li>
        </ul>
    </VisualExperience>;

export {tabellioTechnologies, tabellioDescription};

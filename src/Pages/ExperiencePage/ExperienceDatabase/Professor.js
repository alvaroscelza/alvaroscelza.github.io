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
        <ul className={classes.bulletList}>
            <li>
                Taught <strong>Programming I</strong> at Universidad ORT Uruguay with <strong>Java</strong> and <strong>NetBeans</strong>.
            </li>
            <li>
                Introduced <strong>Scratch</strong> for visual programming.
            </li>
        </ul>
    </VisualExperience>;

export {professorTechnologies, professorDescription};


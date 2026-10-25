import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const dnmTechnologies =
    <ExperienceTechnologies>
        PHP, Smarty, MySQL, C#, .NET, Microsoft SQL Server
        <br/>
        <br/>
        December 2014 to 2018
    </ExperienceTechnologies>

const dnmDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                In August 2016 I built <strong>Procedures Record v1</strong>, a <strong>PHP</strong> / Smarty / <strong>MySQL</strong> backoffice for the immigration procedures handled by Dirección Nacional de Migración.
            </li>
            <li>
                In February 2017 I shipped <strong>v2</strong> in <strong>C#</strong> / <strong>.NET</strong> and SQL Server, fixing shortcomings from v1, including the UI.
            </li>
        </ul>
    </VisualExperience>;

export {dnmTechnologies, dnmDescription};


import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";
const bpsTechnologies =
    <ExperienceTechnologies>
        Python, Odoo, PostgreSQL, Design Thinking
        <br/>
        <br/>
        2018 to 2020 - 2 years
    </ExperienceTechnologies>

const bpsDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                Spent two years on <strong>Project GRP</strong>, the social-security ERP on <strong>Odoo</strong> and <strong>PostgreSQL</strong>: customization and maintenance for government requirements.
            </li>
            <li>
                Wrote <strong>Python pre-commit hooks</strong> that check Odoo practices and PEP8 on each commit. Odoo had no static analysis for this.
            </li>
            <li>
                Joined <strong>SDES Conectados</strong> and used Design Thinking to connect the departments that depend on Software Development Services.
            </li>
        </ul>
    </VisualExperience>;

export {bpsTechnologies, bpsDescription};


import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";
import ExternalLink from "../../../components/UI/ExternalLink";

const ripioTechnologies =
    <ExperienceTechnologies>
        Python, Django, Django REST Framework, PostgreSQL, JavaScript, Node.js, Express.js, MongoDB, AWS, Git, GitHub, CircleCI
        <br/>
        <br/>
        February 2020 to December 2021 - 1 year 11 months
    </ExperienceTechnologies>

const ripioDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                Led a new team for <strong>OTC</strong>, Ripio&apos;s desk for VIP clients with large transaction volumes, while Ripio split the monolith into smaller teams.
            </li>
            <li>
                Built the web API for crypto debit cards in Brazil and the integration with <ExternalLink link="https://conductor.com.br/" text="Conductor"/>. Concurrency control stops a payment from being applied twice, and the provider stays in sync with the internal Balance DB.
            </li>
            <li>
                Wrote a <strong>PDCA</strong> plan for the development process during a year when headcount grew 87.5%. Added README rules, architecture views (allocation, components and connectors, modules) based on &quot;Documenting Software Architectures: Views and Beyond&quot;, and <strong>Jira</strong>.
            </li>
            <li>
                Built <strong>Paymatico</strong> webhooks for crypto payment notifications, the <strong>Eventually</strong> event service on MongoDB, and docs for the Users Control Service and third-party APIs, against a monolith that was already 9+ years old.
            </li>
        </ul>
    </VisualExperience>;

export {ripioTechnologies, ripioDescription};


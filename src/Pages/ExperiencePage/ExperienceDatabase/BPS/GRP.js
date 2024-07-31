import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const GRPTechnologies =
    <ExperienceTechnologies>
        Python Odoo PostgreSQL
        <br/>
        2018 to 2020 - 2 years
    </ExperienceTechnologies>

const erpLink = "https://en.wikipedia.org/wiki/Enterprise_resource_planning";

const GRPDescription =
    <ExperienceDescription>
            During the two years I worked for BPS, I was dedicated to Project GRP:
            an governmental <ExternalLink link={erpLink} text="ERP"/>. It was made
            using <ExternalLink link="https://www.odoo.com/" text="Odoo"/>.
    </ExperienceDescription>

export {GRPTechnologies, GRPDescription};

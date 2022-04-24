import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const GRPTechnologies =
    <ProjectTechnologies>
        Python Odoo PostgreSQL
        <br/>
        2018 to 2020 - 2 years
    </ProjectTechnologies>

const erpLink = "https://en.wikipedia.org/wiki/Enterprise_resource_planning";

const GRPDescription =
    <ProjectDescription>
            During the two years I worked for BPS, I was dedicated to Project GRP:
            an governmental <ExternalLink link={erpLink} text="ERP"/>. It was made
            using <ExternalLink link="https://www.odoo.com/" text="Odoo"/>.
    </ProjectDescription>

export {GRPTechnologies, GRPDescription};

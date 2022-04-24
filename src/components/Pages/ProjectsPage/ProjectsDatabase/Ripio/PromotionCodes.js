import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const promotionCodesTechnologies =
    <ProjectTechnologies>
        2021 - 1 month
    </ProjectTechnologies>

const behaviourViewLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/e-behaviour";
const componentsAndConnectorsLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/c-component-and-connector-c-c-views";
const modulesLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/b-module-views";

const promotionCodesDescription =
    <ProjectDescription>
        Our marketing team needed help to analyze and design the implementation of new promotion codes to catch new
        users (and eventually retain already existent). A feature that, until that moment, was done by hand. <br/>
        I implemented several <ExternalLink link={behaviourViewLink} text="Behaviour View"/> diagrams, amongst them,
        Use Cases and Flow diagrams, besides of
        a <ExternalLink link={componentsAndConnectorsLink} text="Components and Connectors"/> diagram and several
        of <ExternalLink link={modulesLink} text="Modules"/>: Nesting, Packages, Decomposition and Classes.
    </ProjectDescription>

export {promotionCodesTechnologies, promotionCodesDescription};

import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const promotionCodesTechnologies =
    <ExperienceTechnologies>
        2021 - 1 month
    </ExperienceTechnologies>

const behaviourViewLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/e-behaviour";
const componentsAndConnectorsLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/c-component-and-connector-c-c-views";
const modulesLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/b-module-views";

const promotionCodesDescription =
    <ExperienceDescription>
        Our marketing team needed help to analyze and design the implementation of new promotion codes to catch new
        users (and eventually retain already existent). A feature that, until that moment, was done by hand. <br/>
        I implemented several <ExternalLink link={behaviourViewLink} text="Behaviour View"/> diagrams, amongst them,
        Use Cases and Flow diagrams, besides of
        a <ExternalLink link={componentsAndConnectorsLink} text="Components and Connectors"/> diagram and several
        of <ExternalLink link={modulesLink} text="Modules"/>: Nesting, Packages, Decomposition and Classes.
    </ExperienceDescription>

export {promotionCodesTechnologies, promotionCodesDescription};

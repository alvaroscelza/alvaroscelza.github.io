import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const documentationProcessesTechnologies =
    <ExperienceTechnologies>
        2021 - 2 months
    </ExperienceTechnologies>

const pdcaLink = "https://en.wikipedia.org/wiki/PDCA";
const allocationViewLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/d-allocation-views";
const componentsAndConnectorsViewLink = "http://www.faadooengineers.com/online-study/post/eee/software-engineering/1392/component-and-connector-view";
const modulesViewLink = "https://sites.google.com/site/softwarearchitectureinpractice/9-documenting-software-architecture/b-module-views";
const archDocBookLink = "https://www.pearson.com/uk/educators/higher-education-educators/program/Clements-Documenting-Software-Architectures-Views-and-Beyond-2nd-Edition/PGM914471.html";
const jiraLink = "https://www.atlassian.com/es/software/jira";

const documentationProcessesDescription =
    <ExperienceDescription>
        Since before my entry, Ripio had a truly exponential growth: only in my first year it duplicated the amount of employees it had, and increased it by an amazing 87.5% in my second year. The ad hoc processes used for development and documentation to that moment where no longer enough. Since my personal way of working implies a strong level of applying formal processes and methodologies, that include diagramming, documentation (such as kanban), estimation and other techniques learnt in my career, I was asked to use that knowledge and experience to improve Ripio's processes in regard to the development team. With this purpose, I elaborated a plan of procedural changes, based on <ExternalLink link={pdcaLink} text="PDCA"/>. This plan started with formal technical documentation and was based on enforcing the usage of a README document on each code repository (which wasn't strictly asked until then, so some of our repositories had a README, while others didn't). This README files would have to strictly include certain required sections, so we would eventually be able to guarantee at least some minimum common information on each repository. The next stage demanded the inclusion of high level architectural diagrams, such as: <ExternalLink link={allocationViewLink} text="Allocation View"/> and&nbsp; <ExternalLink link={componentsAndConnectorsViewLink} text="Components & Connectors View"/>. Later, we would require low level diagrams: <ExternalLink link={modulesViewLink} text="Modules View"/>. Finally we started to use project management tools, like <ExternalLink link={jiraLink} text="Jira"/>. Note: the architectural documentation is based on the book <ExternalLink link={archDocBookLink} text="Documenting Software Architectures: Views and Beyond"/>.
    </ExperienceDescription>

export {documentationProcessesTechnologies, documentationProcessesDescription};

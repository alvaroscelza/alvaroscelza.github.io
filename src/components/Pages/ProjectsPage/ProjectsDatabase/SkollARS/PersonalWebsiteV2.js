import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const personalWebsiteV2Technologies =
    <ProjectTechnologies>
        Javascript React GithubPages
        <br/>
        2022 - 1 month
    </ProjectTechnologies>

const personalWebsiteV2Description =
    <ProjectDescription>
        This website 🙂 <br/>
        Now made with <ExternalLink link="https://reactjs.org/" text="React"/>, previous version was made
        using <ExternalLink link="https://docs.getpelican.com/en/latest/" text="Pelican"/>.
    </ProjectDescription>

export {personalWebsiteV2Technologies, personalWebsiteV2Description};

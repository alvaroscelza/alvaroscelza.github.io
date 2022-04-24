import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const personalWebsiteTechnologies =
    <ProjectTechnologies>
        Python Pelican GithubPages
        <br/>
        2021 - 1 month
    </ProjectTechnologies>

const personalWebsiteDescription =
    <ProjectDescription>
        This website 🙂 <br/>
        It's first version was made using <ExternalLink link="https://docs.getpelican.com/en/latest/" text="Pelican"/>.
    </ProjectDescription>

export {personalWebsiteTechnologies, personalWebsiteDescription};

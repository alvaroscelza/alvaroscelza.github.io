import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const skollarsWebsiteTechnologies =
    <ProjectTechnologies>
        Javascript React GithubPages
        <br/>
        2021 - 1 month
    </ProjectTechnologies>

const skollarsWebsiteDescription =
    <ProjectDescription>
        Website to offer my company's services. Since I presently work full-time with my current customer, this
        project is on pause and its contact form is disabled. <br/>
        <br/>
        You can see it <ExternalLink link="https://skollars.com/" text="here"/>.
    </ProjectDescription>

export {skollarsWebsiteTechnologies, skollarsWebsiteDescription};

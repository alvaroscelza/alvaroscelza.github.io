import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import classes from "../../../Pages.module.css";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";

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
        You can see it&nbsp;
        <a target="_blank" rel="noopener noreferrer" className={classes.link} href="https://skollars.com/">
            here
        </a>.
    </ProjectDescription>

export {skollarsWebsiteTechnologies, skollarsWebsiteDescription};

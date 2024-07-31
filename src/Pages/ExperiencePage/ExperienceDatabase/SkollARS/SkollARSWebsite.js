import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const skollarsWebsiteTechnologies =
    <ExperienceTechnologies>
        Javascript React GithubPages
        <br/>
        2021 - 1 month
    </ExperienceTechnologies>

const skollarsWebsiteDescription =
    <ExperienceDescription>
        Website to offer my company's services. Since I presently work full-time with my current customer, this
        project is on pause and its contact form is disabled. <br/>
        <br/>
        You can see it <ExternalLink link="https://skollars.com/" text="here"/>.
    </ExperienceDescription>

export {skollarsWebsiteTechnologies, skollarsWebsiteDescription};

import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const personalWebsiteV2Technologies =
    <ExperienceTechnologies>
        Javascript React GithubPages
        <br/>
        2023 - 2 months
    </ExperienceTechnologies>

const personalWebsiteV2Description =
    <ExperienceDescription>
        This website 🙂 <br/>
        Now made with <ExternalLink link="https://reactjs.org/" text="React"/>, previous version was made
        using <ExternalLink link="https://docs.getpelican.com/en/latest/" text="Pelican"/>.
    </ExperienceDescription>

export {personalWebsiteV2Technologies, personalWebsiteV2Description};

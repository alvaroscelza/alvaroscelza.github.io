import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const personalWebsiteTechnologies =
    <ExperienceTechnologies>
        Python Pelican GithubPages
        <br/>
        2021 - 1 month
    </ExperienceTechnologies>

const personalWebsiteDescription =
    <ExperienceDescription>
        This website 🙂 <br/>
        It's first version was made using <ExternalLink link="https://docs.getpelican.com/en/latest/" text="Pelican"/>.
    </ExperienceDescription>

export {personalWebsiteTechnologies, personalWebsiteDescription};

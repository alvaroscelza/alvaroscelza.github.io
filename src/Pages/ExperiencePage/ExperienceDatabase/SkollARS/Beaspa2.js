import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const beaspa2Technologies =
    <ExperienceTechnologies>
        Javascript Electron NodeJS
        <br/>
        2018 - 1 month
    </ExperienceTechnologies>

const electronLink = "https://www.electronjs.org/";

const beaspa2Description =
    <ExperienceDescription>
        Since the first version UI design didn't convince me, I decided to look for an alternative and
        found <ExternalLink link={electronLink} text="ElectronJS"/>. This amazing tool, based on NodeJS and Chromium,
        allows to build multi platform desktop applications with all the power of Javascript, html y css.
    </ExperienceDescription>

export {beaspa2Technologies, beaspa2Description};

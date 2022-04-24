import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const beaspa2Technologies =
    <ProjectTechnologies>
        Javascript Electron NodeJS
        <br/>
        2018 - 1 month
    </ProjectTechnologies>

const electronLink = "https://www.electronjs.org/";

const beaspa2Description =
    <ProjectDescription>
        Since the first version UI design didn't convince me, I decided to look for an alternative and
        found <ExternalLink link={electronLink} text="ElectronJS"/>. This amazing tool, based on NodeJS and Chromium,
        allows to build multi platform desktop applications with all the power of Javascript, html y css.
    </ProjectDescription>

export {beaspa2Technologies, beaspa2Description};

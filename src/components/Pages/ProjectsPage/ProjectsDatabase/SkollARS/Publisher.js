import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const publisherTechnologies =
    <ProjectTechnologies>
        Javascript NodeJS NightmareJS
        <br/>
        2019 - 1 month
    </ProjectTechnologies>

const nightmareLink = "https://github.com/segmentio/nightmare";

const publisherDescription =
    <ProjectDescription>
        I tried to make some projects as a Freelancer for some time. <br/>
        I once got a customer that asked me to create a script to automatically publish products from a listing, into
        Facebook Market. <br/>
        Back then I didn't find an API that would help with those features (I only found marketing's), so I decided to
        try out a script that would imit a user in a headless browser. To that end I
        used <ExternalLink link={nightmareLink} text="NightmareJS"/>. <br/>
        <br/>
        Truth is, it didn't work... FB generates the ids on its html randomly, and thus, it's difficult to access
        them programmatically. I managed to implement the login, navigate to the market place, create and fill the
        publication, but the final state to actually publish it was impossible for me.
        Nevertheless, it was a very interesting learning opportunity.
    </ProjectDescription>

export {publisherTechnologies, publisherDescription};

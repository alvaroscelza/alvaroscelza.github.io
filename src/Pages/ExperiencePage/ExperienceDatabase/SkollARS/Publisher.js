import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const publisherTechnologies =
    <ExperienceTechnologies>
        Javascript NodeJS NightmareJS
        <br/>
        2019 - 1 month
    </ExperienceTechnologies>

const nightmareLink = "https://github.com/segmentio/nightmare";

const publisherDescription =
    <ExperienceDescription>
        I tried to make some projects as a Freelancer for some time. I once got a customer that asked me to create a script to automatically publish products from a listing, into Facebook Market. Back then I didn't find an API that would help with those features (I only found marketing's), so I decided to try out a script that would imit a user in a headless browser. To that end I used <ExternalLink link={nightmareLink} text="NightmareJS"/>. Truth is, it didn't work... FB generates the ids on its html randomly, and thus, it's difficult to access them programmatically. I managed to implement the login, navigate to the market place, create and fill the publication, but the final state to actually publish it was impossible for me. Nevertheless, it was a very interesting learning opportunity.
    </ExperienceDescription>

export {publisherTechnologies, publisherDescription};

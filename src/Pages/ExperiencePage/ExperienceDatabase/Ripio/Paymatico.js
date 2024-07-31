import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";

const paymaticoTechnologies =
    <ExperienceTechnologies>
        Python Django PostgreSQL
        <br/>
        2021 - 1 month
    </ExperienceTechnologies>

const paymaticoDescription =
    <ExperienceDescription>
        After the development of a new service in charge of consuming a provider's API to manage crypto payments, we
        needed to develop a webhook that would receive payments notices from this provider to our main application
        called Ripio. I was assigned this small project that implied great investigation of our main project Ripio, a
        huge monolith with more than 9 years of existence.
    </ExperienceDescription>

export {paymaticoTechnologies, paymaticoDescription};

import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const ConductorTechnologies =
    <ExperienceTechnologies>
        Python Django PostgreSQL
        <br/>
        February 2020 to June 2021 - 1 year 5 months
    </ExperienceTechnologies>

const ConductorDescription =
    <ExperienceDescription>
        We needed to build an application to manage Ripio's new product on Brazil: debit cards for purchases using crypto. For this purpose, the construction of a web API was required, that would hold all the logic that our frontend teams would consume. This API had two main difficulties: 1- It had to consume the API's services from our cards and payments provider: <ExternalLink link="https://conductor.com.br/" text="Conductor"/>. 2- It had to manage all payments reported by our provider to our Balance DB, which was another of Ripio's services already on production. An strict control of said payments was needed, to avoid security failures, and a careful handling of concurrency, preventing for instance, the authorization and execution of double payment. I was assigned together with a coworker to develop this API.
    </ExperienceDescription>

export {ConductorTechnologies, ConductorDescription};

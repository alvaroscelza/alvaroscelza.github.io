import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const ConductorTechnologies =
    <ProjectTechnologies>
        Python Django PostgreSQL
        <br/>
        2020 - 8 months
    </ProjectTechnologies>

const ConductorDescription =
    <ProjectDescription>
        We needed to build an application to manage Ripio's new product on Brazil: debit cards for purchases using
        crypto. <br/>
        For this purpose, the construction of a web API was required, that would hold all the logic that our frontend
        teams would consume. This API had two main difficulties: <br/>
        <br/>
        1- It had to consume the API's services from our cards and payments
        provider: <ExternalLink link="https://conductor.com.br/" text="Conductor"/>. <br/>
        2- It had to manage all payments reported by our provider to our Balance DB, which was another of Ripio's
        services already on production. An strict control of said payments was needed, to avoid security failures, and a
        careful handling of concurrency, preventing for instance, the authorization and execution of double payment. <br/>
        <br/>
        I was assigned together with a coworker to develop this API.
    </ProjectDescription>

export {ConductorTechnologies, ConductorDescription};

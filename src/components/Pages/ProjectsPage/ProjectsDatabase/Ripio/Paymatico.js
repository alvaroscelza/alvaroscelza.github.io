import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";

const paymaticoTechnologies =
    <ProjectTechnologies>
        Python Django PostgreSQL
        <br/>
        2021 - 1 month
    </ProjectTechnologies>

const paymaticoDescription =
    <ProjectDescription>
        After the development of a new service in charge of consuming a provider's API to manage crypto payments, we
        needed to develop a webhook that would receive payments notices from this provider to our main application
        called Ripio. I was assigned this small project that implied great investigation of our main project Ripio, a
        huge monolith with more than 9 years of existence.
    </ProjectDescription>

export {paymaticoTechnologies, paymaticoDescription};

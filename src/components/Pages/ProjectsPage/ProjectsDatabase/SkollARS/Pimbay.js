import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const pimbayTechnologies =
    <ProjectTechnologies>
        Scrum(adapted) Lean-Startup Design-Thinking Java-8 Spring ReactJS React-Native Expo Google-Cloud-Platform
        ChatCamp Geocoding-Responses Expo-Push-Notifications Firebase-authentication
        <br/>
        2018 to 2019 - 1 year
    </ProjectTechnologies>

const pimbayLink = "https://fi.ort.edu.uy/77855/33/pimbay:-que-estas-para-hacer-hoy-red-social-orientada-a-actividades.html";
const agileEstimatingAndPlanningLink = "https://books.google.com.uy/books/about/Agile_Estimating_And_Planning.html?id=dzB09hXDPhUC&amp;source=kp_book_description&amp;redir_esc=y";

const pimbayDescription =
    <ProjectDescription>
        My end of career Thesis. You can see its abstract <ExternalLink link={pimbayLink} text="here"/>. <br/>
        <br/>
        We were a team of 5 people for this project. 2 were in charge of the backend development (Java API), another 2
        were in charge of the mobile development with React Native, and finally, I took the role of the team leader,
        quality assurance responsible, documentation responsible and Requirements Engineer, in charge of: <br/>
        - Preparing the main development methodology and presenting it to the rest of the team. It was an adaptation of
        Scrum that I developed personally basing on the
        book <ExternalLink link={agileEstimatingAndPlanningLink} text="Agile Estimating and Planning"/> of Mike
        Cohn. <br/>
        - I also proposed the usage of Design Thinking to validate our project and all the ideas we had for it. I was
        also in charge of preparing and planning all the techniques we would use from that methodology for each
        validation week we had (third week of each iteration). <br/>
        - Layout and writing of the majority of the Thesis's documentation. <br/>
        - Iteration planning, estimations, metrics and reports. <br/>
        - Maintenance and continuous analysis of the Release Burndown Chart and the Iteration Burndown Chart. <br/>
        - Guide for support activities for each iteration: requirements engineering, risks management, quality revisions
        bugs reporting, SCM, architecture, communication management, among others.
    </ProjectDescription>

export {pimbayTechnologies, pimbayDescription};

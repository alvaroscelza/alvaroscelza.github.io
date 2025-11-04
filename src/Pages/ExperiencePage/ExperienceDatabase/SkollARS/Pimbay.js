import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const pimbayTechnologies =
    <ExperienceTechnologies>
        Scrum(adapted) Lean-Startup Design-Thinking Java-8 Spring ReactJS React-Native Expo Google-Cloud-Platform
        ChatCamp Geocoding-Responses Expo-Push-Notifications Firebase-authentication
        <br/>
        2018 to 2019 - 1 year
    </ExperienceTechnologies>

const agileEstimatingAndPlanningLink = "https://books.google.com.uy/books/about/Agile_Estimating_And_Planning.html?id=dzB09hXDPhUC&amp;source=kp_book_description&amp;redir_esc=y";

const pimbayDescription =
    <ExperienceDescription>
        My end of career Thesis. We were a team of 5 people for this project. 2 were in charge of the backend development (Java API), another 2 were in charge of the mobile development with React Native, and finally, I took the role of the team leader, quality assurance responsible, documentation responsible and Requirements Engineer, in charge of: - Preparing the main development methodology and presenting it to the rest of the team. It was an adaptation of Scrum that I developed personally basing on the book <ExternalLink link={agileEstimatingAndPlanningLink} text="Agile Estimating and Planning"/> of Mike Cohn. - I also proposed the usage of Design Thinking to validate our project and all the ideas we had for it. I was also in charge of preparing and planning all the techniques we would use from that methodology for each validation week we had (third week of each iteration). - Layout and writing of the majority of the Thesis's documentation. - Iteration planning, estimations, metrics and reports. - Maintenance and continuous analysis of the Release Burndown Chart and the Iteration Burndown Chart. - Guide for support activities for each iteration: requirements engineering, risks management, quality revisions bugs reporting, SCM, architecture, communication management, among others.
    </ExperienceDescription>

export {pimbayTechnologies, pimbayDescription};

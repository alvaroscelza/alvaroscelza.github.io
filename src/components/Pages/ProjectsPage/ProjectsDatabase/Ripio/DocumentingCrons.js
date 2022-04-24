import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";

const documentingCronsTechnologies =
    <ProjectTechnologies>
        2021 - 1 month
    </ProjectTechnologies>

const documentingCronsDescription =
    <ProjectDescription>
        I was asked to perform a complete survey of all the crons (scheduled functions) executed on our monolith Ripio.
        For this I had to dive into the monolith's code for enough time to find all those functions and understand how
        they worked. I ultimately created a Nesting/Use diagram that allowed to easily visualize which crons we had, how
        many, where they where located in the code, and what dependencies they had among them.
    </ProjectDescription>

export {documentingCronsTechnologies, documentingCronsDescription};

import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";

const usersControlServiceTechnologies =
    <ProjectTechnologies>
        2021 - 1 month
    </ProjectTechnologies>

const usersControlServiceDescription =
    <ProjectDescription>
        Our Users Control Service, whose name I'll keep private, contained a set of rules that automatically controlled
        our users actions: operations limits among others. The development and maintenance of this rules was becoming
        unmanageable due to the lack of efficient documentation. Our team lost the global vision of all the applied
        rules, the cases in which each one of them executed, the priority among them, etc. I was asked to solve the
        problem, and thus, I started reading and analyzing the only document related to the project: a manually
        maintained changelog that contained notes on all the conversational discussions between the development team and
        the compliance team. Having understood all the changes history I was able to translate that document into an
        architecture document containing use cases diagrams, multiple flow diagrams, functional and non functional
        requirements analysis and business restrictions.
    </ProjectDescription>

export {usersControlServiceTechnologies, usersControlServiceDescription};

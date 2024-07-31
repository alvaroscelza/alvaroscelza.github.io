import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const juezOnlineORTTechnologies =
    <ExperienceTechnologies>
        C# .NET ASP.NET MVC Microsoft SQL Server Javascript HTML CSS
        <br/>
        2016 - 6 months
    </ExperienceTechnologies>

const programmingContestsLink = "https://fi.ort.edu.uy/catedras/programacion/concurso";

const juezOnlineORTDescription =
    <ExperienceDescription>
        In 2016 as part of a college's project, we offered with a classmate to build an online judge for
        our <ExternalLink link="https://www.ort.edu.uy/" text="Universidad ORT"/>. This web application was inspired
        on <ExternalLink link="https://leetcode.com/" text="leetcode"/> and many other similar web tools. <br/>
        The goal was that the University counted with its own Software to implement
        its <ExternalLink link={programmingContestsLink} text="programming contests"/>, as well as providing support
        to programming and algorithms courses. <br/>
        <br/>
        The development took all the semester and we were rewarded with one credit for the career, the equivalent of a
        complete optional course.
    </ExperienceDescription>

export {juezOnlineORTTechnologies, juezOnlineORTDescription};

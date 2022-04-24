import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import ExternalLink from "../../../../UI/ExternalLink";

const shootingRangeTechnologies =
    <ProjectTechnologies>
        C# .NET ASP.NET MVC Microsoft SQL Server Microsoft Azure
        <br/>
        2020 - 1 month
    </ProjectTechnologies>

const modelFirstLink = "https://www.entityframeworktutorial.net/model-first-with-entity-framework.aspx"

const shootingRangeDescription =
    <ProjectDescription>
        I got a client once that wanted to build an application to manage his future shooting range establishment.
        This person needed a backoffice in which He could manage gear, staff and customers, but also wished a part
        of the site focused on his customers, so as to offer them courses, certifications, shooting gear, teachers and
        eventually allow them to book their classes. <br/>
        <br/>
        Since I was tight on time to face this project personally, I decided to extend my working capacity by contracting
        a freelancer. He developed the Software using <ExternalLink link={modelFirstLink} text="Model First"/>, though
        He required some help from my part to solve some problems He encountered.<br/>
        <br/>
        The client used his own server for hosting.
    </ProjectDescription>

export {shootingRangeTechnologies, shootingRangeDescription};

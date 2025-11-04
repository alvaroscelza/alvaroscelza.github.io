import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const shootingRangeTechnologies =
    <ExperienceTechnologies>
        C# .NET ASP.NET MVC Microsoft SQL Server Microsoft Azure
        <br/>
        2020 - 1 month
    </ExperienceTechnologies>

const modelFirstLink = "https://www.entityframeworktutorial.net/model-first-with-entity-framework.aspx"

const shootingRangeDescription =
    <ExperienceDescription>
        I got a client once that wanted to build an application to manage his future shooting range establishment. This person needed a backoffice in which He could manage gear, staff and customers, but also wished a part of the site focused on his customers, so as to offer them courses, certifications, shooting gear, teachers and eventually allow them to book their classes. Since I was tight on time to face this project personally, I decided to extend my working capacity by contracting a freelancer. He developed the Software using <ExternalLink link={modelFirstLink} text="Model First"/>, though He required some help from my part to solve some problems He encountered. The client used his own server for hosting.
    </ExperienceDescription>

export {shootingRangeTechnologies, shootingRangeDescription};

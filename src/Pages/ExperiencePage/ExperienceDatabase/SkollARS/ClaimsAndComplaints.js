import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const claimsAndComplaintsTechnologies =
    <ExperienceTechnologies>
        C# .NET ASP.NET MVC Microsoft SQL Server Ruby RubyOnRails SQLite
        <br/>
        2019 to 2020 - 1 year
    </ExperienceTechnologies>

const customerDefenseLink = "https://www.gub.uy/ministerio-economia-finanzas/area-defensa-consumidor";

const claimsAndComplaintsDescription =
    <ExperienceDescription>
        Many years ago when I was in college, I had the idea of building a Software where people could rate services or products received by each company. With time, this would become a complete database of what companies where the best for each industry... and which companies you should stay away from. This was needed mainly because state-owned services with that purpose (<ExternalLink link={customerDefenseLink} text="area-defensa-consumidor in Uruguay"/>) rarely work. It was needed sort of "social complaint" toward those companies that did not pay enough attention to their customers. It's true that this project doesn't have much future: - To begin with, Google Maps has a secondary feature to allow people to rate companies. Even though this is not exactly the same (not all companies are registered there and it's not easy for everyone to add new so as to be able to rate them), it does cover much of the demand for this feature. Specially because... well, it's Google. - There are webpages and accounts on social networks that try to give this service (e.g.: <ExternalLink link={"https://twitter.com/quejasya"} text="quejasya"/>). They seem, however, to be intermittent: they last for short time and disappear, appearing new ones later. Independently of its success opportunity, this is a pending project for me, for pure personal satisfaction. Over 2019 and good part of 2020 I was slowly building a version of this Software in RoR, inspired on the primary version I created at college with C#, as part of one of my courses final work. Eventually I relegated it and it's still unfinished.
    </ExperienceDescription>

export {claimsAndComplaintsTechnologies, claimsAndComplaintsDescription};

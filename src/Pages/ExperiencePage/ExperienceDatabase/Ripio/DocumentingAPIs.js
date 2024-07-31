import ExperienceTechnologies from "../../ExperiencePageComponents/ExperienceTechnologies";
import ExperienceDescription from "../../ExperiencePageComponents/ExperienceDescription";
import ExternalLink from "../../../../components/UI/ExternalLink";

const documentingAPIsTechnologies =
    <ExperienceTechnologies>
        2021 - 1 month
    </ExperienceTechnologies>

const allianceWithML = "https://www.iprofesional.com/tecnologia/277872-ripio-y-mercado-libre-se-unen-para-llevar-los-bitcoins-al-e-commerce-argentino";

const documentingAPIsDescription =
    <ExperienceDescription>
        We needed to document our APIs for eventual consumers (partner companies, such
        as <ExternalLink link={allianceWithML} text="our alliance with Mercado Libre"/>). Once again I was asked for
        help to dive into the features our APIs offered, do reverse engineering and document them, this time not only
        with architectural diagrams, but also with <ExternalLink link="https://swagger.io/" text="Swagger"/>.
    </ExperienceDescription>

export {documentingAPIsTechnologies, documentingAPIsDescription};

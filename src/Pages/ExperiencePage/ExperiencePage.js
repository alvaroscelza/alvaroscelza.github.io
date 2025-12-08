import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import CompanyTitle from "./ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "./ExperiencePageComponents/ExperienceTitle";
import {amoebaAIDescription, amoebaAITechnologies} from "./ExperienceDatabase/AmoebaAI";
import {elasticHotelDescription, elasticHotelTechnologies} from "./ExperienceDatabase/ElasticHotel";
import {createThriveDescription, createThriveTechnologies} from "./ExperienceDatabase/CreateThrive";
import {skollarsDescription, skollarsTechnologies} from "./ExperienceDatabase/SkollARS";
import {ripioDescription, ripioTechnologies} from "./ExperienceDatabase/Ripio";
import {bpsDescription, bpsTechnologies} from "./ExperienceDatabase/BPS";
import {professorDescription, professorTechnologies} from "./ExperienceDatabase/Professor";
import {dnmDescription, dnmTechnologies} from "./ExperienceDatabase/DNM";

const ExperiencePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Experience"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Experience
            </h1>

            <div className={classes.textAlignCenter}>
                <CompanyTitle companyImage="/static/images/amoeb_ai.jpg" companyImageAltText="Amoeba AI" companyWebLink="https://www.amoeb.ai/ " companyName="Amoeba AI"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {amoebaAITechnologies}
                {amoebaAIDescription}

                <CompanyTitle companyImage="/static/images/elasticHotel.png" companyImageAltText="elastic-hotel" companyWebLink="https://www.elastichotel.com/" companyName="Elastic Hotel"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {elasticHotelTechnologies}
                {elasticHotelDescription}

                <CompanyTitle companyImage="/static/images/create-thrive.jpg" companyImageAltText="create-thrive" companyWebLink="https://www.createthrive.com/" companyName="CreateThrive"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {createThriveTechnologies}
                {createThriveDescription}

                <CompanyTitle companyImage="/static/images/skollars.png" companyImageAltText="SkollARS" companyWebLink="https://skollars.com/" companyName="SkollARS"/>
                <ExperienceTitle restOfTitle="Founder & Software Systems Engineer"/>
                {skollarsTechnologies}
                {skollarsDescription}

                <CompanyTitle companyImage="/static/images/ripio.png" companyImageAltText="Ripio" companyWebLink="https://www.ripio.com/ar/" companyName="Ripio"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {ripioTechnologies}
                {ripioDescription}

                <CompanyTitle companyImage="/static/images/bps.png" companyImageAltText="BPS" companyWebLink="https://www.bps.gub.uy/"
                              companyName="Banco de Previsión Social"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {bpsTechnologies}
                {bpsDescription}

                <CompanyTitle companyImage="/static/images/ORT.png" companyImageAltText="ORT" companyWebLink="https://www.ort.edu.uy/"
                              companyName="Universidad ORT Uruguay"/>
                <ExperienceTitle restOfTitle="Professor of Programming I"/>
                {professorTechnologies}
                {professorDescription}

                <CompanyTitle companyImage="/static/images/dnm.gif" companyImageAltText="DNM"
                              companyWebLink="https://www.gub.uy/migracion"
                              companyName="Dirección Nacional de Migración"/>
                <ExperienceTitle restOfTitle="Software Developer"/>
                {dnmTechnologies}
                {dnmDescription}
            </div>
        </>
    );
}

export default ExperiencePage;

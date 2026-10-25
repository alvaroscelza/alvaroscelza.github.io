import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import CompanyTitle from "./ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "./ExperiencePageComponents/ExperienceTitle";
import InternalLink from "../../components/UI/InternalLink";
import {blend360Description, blend360Technologies} from "./ExperienceDatabase/Blend360";
import {promtiorDescription, promtiorTechnologies} from "./ExperienceDatabase/Promtior";
import {amoebaAIDescription, amoebaAITechnologies} from "./ExperienceDatabase/AmoebaAI";
import {elasticHotelDescription, elasticHotelTechnologies} from "./ExperienceDatabase/ElasticHotel";
import {createThriveDescription, createThriveTechnologies} from "./ExperienceDatabase/CreateThrive";
import {ripioDescription, ripioTechnologies} from "./ExperienceDatabase/Ripio";
import {bpsDescription, bpsTechnologies} from "./ExperienceDatabase/BPS";
import {professorDescription, professorTechnologies} from "./ExperienceDatabase/Professor";
import {dnmDescription, dnmTechnologies} from "./ExperienceDatabase/DNM";

const ExperiencePage = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        document.title = "Alvaro Scelza - Experience"
    }, []);

    useEffect(() => {
        const role = searchParams.get("role");
        if (!role) {
            return;
        }
        const target = document.getElementById(role);
        if (target) {
            target.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }, [searchParams]);

    return (
        <>
            <h1 className={classes.h1}>
                Experience
            </h1>

            <div className={classes.textAlignCenter}>
                <div id="blend360">
                <CompanyTitle companyImage="/static/images/blend360.jpg" companyImageAltText="Blend360" companyWebLink="https://www.blend360.com/" companyName="Blend360"/>
                <ExperienceTitle restOfTitle="Software Engineer"/>
                {blend360Technologies}
                {blend360Description}
                </div>

                <div id="promtior">
                <CompanyTitle companyImage="/static/images/Promtior.png" companyImageAltText="Promtior" companyWebLink="https://home.promtior.ai/" companyName="Promtior"/>
                <ExperienceTitle restOfTitle="Full-Cycle Software Engineer · Contract (client engagement)"/>
                {promtiorTechnologies}
                {promtiorDescription}
                </div>

                <div id="career-break" className={classes.careerBreak}>
                    <h2 className={classes.h2}>
                        <InternalLink link="/projects" text="Sep–Nov 2025 — Career break: built personal products (Tabellio, FinApp)"/>
                    </h2>
                </div>

                <div id="amoeba">
                <CompanyTitle companyImage="/static/images/amoeb_ai.jpg" companyImageAltText="Amoeba AI" companyWebLink="https://www.amoeb.ai/" companyName="Amoeba AI"/>
                <ExperienceTitle restOfTitle="Software Engineer · Early-stage startup"/>
                {amoebaAITechnologies}
                {amoebaAIDescription}
                </div>

                <CompanyTitle companyImage="/static/images/elasticHotel.png" companyImageAltText="elastic-hotel" companyWebLink="https://www.elastichotel.com/" companyName="Elastic Hotel"/>
                <ExperienceTitle restOfTitle="FullStack Software Engineer"/>
                {elasticHotelTechnologies}
                {elasticHotelDescription}

                <CompanyTitle companyImage="/static/images/create-thrive.jpg" companyImageAltText="create-thrive" companyWebLink="https://www.createthrive.com/" companyName="CreateThrive"/>
                <ExperienceTitle restOfTitle="FullStack Software Engineer"/>
                {createThriveTechnologies}
                {createThriveDescription}

                <CompanyTitle companyImage="/static/images/ripio.png" companyImageAltText="Ripio" companyWebLink="https://www.ripio.com/ar/" companyName="Ripio"/>
                <ExperienceTitle restOfTitle="Team Leader"/>
                {ripioTechnologies}
                {ripioDescription}

                <CompanyTitle companyImage="/static/images/bps.png" companyImageAltText="BPS" companyWebLink="https://www.bps.gub.uy/"
                              companyName="Banco de Previsión Social"/>
                <ExperienceTitle restOfTitle="Software Developer"/>
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
                <ExperienceTitle restOfTitle="Technical Support - Software Development"/>
                {dnmTechnologies}
                {dnmDescription}
            </div>
        </>
    );
}

export default ExperiencePage;

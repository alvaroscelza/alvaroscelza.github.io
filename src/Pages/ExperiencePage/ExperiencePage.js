import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import CompanyTitle from "./ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "./ExperiencePageComponents/ExperienceTitle";
import {
    sunpowerInstantDesignTechnologies,
    sunpowerInstantDesignDescription
} from "./ExperienceDatabase/CreateThrive/SunpowerInstantDesign";
import {skollarsDescription} from "./ExperienceDatabase/SkollARS/SkollARS";
import {skollarsWebsiteDescription, skollarsWebsiteTechnologies} from "./ExperienceDatabase/SkollARS/SkollARSWebsite";
import {personalWebsiteDescription, personalWebsiteTechnologies} from "./ExperienceDatabase/SkollARS/PersonalWebsite";
import {finappDescription, finappTechnologies} from "./ExperienceDatabase/SkollARS/FinAPP";
import {taurusDescription, taurusTechnologies} from "./ExperienceDatabase/SkollARS/Taurus";
import {shootingRangeDescription, shootingRangeTechnologies} from "./ExperienceDatabase/SkollARS/ShootingRange";
import {mortuaryDescription, mortuaryTechnologies} from "./ExperienceDatabase/SkollARS/Mortuary";
import {
    claimsAndComplaintsDescription,
    claimsAndComplaintsTechnologies
} from "./ExperienceDatabase/SkollARS/ClaimsAndComplaints";
import {publisherDescription, publisherTechnologies} from "./ExperienceDatabase/SkollARS/Publisher";
import {
    instagramUnfollowerDescription,
    instagramUnfollowerTechnologies
} from "./ExperienceDatabase/SkollARS/InstagramUnfollower";
import {pimbayDescription, pimbayTechnologies} from "./ExperienceDatabase/SkollARS/Pimbay";
import {
    beaspa2Description,
    beaspa2Technologies,
} from "./ExperienceDatabase/SkollARS/Beaspa2";
import {beaspaDescription, beaspaTechnologies} from "./ExperienceDatabase/SkollARS/Beaspa";
import {miroYEntiendoDescription, miroYEntiendoTechnologies} from "./ExperienceDatabase/SkollARS/MiroYEntiendo";
import {
    distribuidoraSaturnoDescription,
    distribuidoraSaturnoTechnologies
} from "./ExperienceDatabase/SkollARS/DistribuidoraSaturno";
import {juezOnlineORTDescription, juezOnlineORTTechnologies} from "./ExperienceDatabase/SkollARS/JuezOnlineORT";
import {otcDescription, otcTechnologies} from "./ExperienceDatabase/Ripio/OTC";
import {paymaticoDescription, paymaticoTechnologies} from "./ExperienceDatabase/Ripio/Paymatico";
import {eventuallyDescription, eventuallyTechnologies} from "./ExperienceDatabase/Ripio/Eventually";
import {documentingCronsDescription, documentingCronsTechnologies} from "./ExperienceDatabase/Ripio/DocumentingCrons";
import {documentingAPIsDescription, documentingAPIsTechnologies} from "./ExperienceDatabase/Ripio/DocumentingAPIs";
import {promotionCodesDescription, promotionCodesTechnologies} from "./ExperienceDatabase/Ripio/PromotionCodes";
import {
    usersControlServiceDescription,
    usersControlServiceTechnologies
} from "./ExperienceDatabase/Ripio/UsersControlService";
import {
    documentationProcessesDescription,
    documentationProcessesTechnologies
} from "./ExperienceDatabase/Ripio/DocumentationProcesses";
import {
    rp_card_authorizatorDescription,
    rp_card_authorizatorTechnologies
} from "./ExperienceDatabase/Ripio/rp_card_authorizator";
import {ConductorDescription, ConductorTechnologies} from "./ExperienceDatabase/Ripio/Conductor";
import {SDESConectadosDescription, SDESConectadosTechnologies} from "./ExperienceDatabase/BPS/SDESConectados";
import {PreCommitHooksDescription, PreCommitHooksTechnologies} from "./ExperienceDatabase/BPS/PreCommitHooks";
import {GRPDescription, GRPTechnologies} from "./ExperienceDatabase/BPS/GRP";
import {ProceduresRecord2Description, ProceduresRecord2Technologies} from "./ExperienceDatabase/DNM/ProceduresRecord2";
import {ProceduresRecordDescription, ProceduresRecordTechnologies} from "./ExperienceDatabase/DNM/ProceduresRecord";
import {
    personalWebsiteV2Description,
    personalWebsiteV2Technologies
} from "./ExperienceDatabase/SkollARS/PersonalWebsiteV2";
import {kardDescription, kardTechnologies} from "./ExperienceDatabase/CreateThrive/Kard";
import {taurus2Description, taurus2Technologies} from "./ExperienceDatabase/SkollARS/Taurus2";
import {noNerdsDescription, noNerdsTechnologies} from "./ExperienceDatabase/CreateThrive/NoNerdsNoProblem";
import {convexDescription, convexTechnologies} from "./ExperienceDatabase/CreateThrive/Convex";
import {versionOneDescription, versionOneTechnologies} from "./ExperienceDatabase/ElasticHotel/Version_1";
import {versionTwoDescription, versionTwoTechnologies} from "./ExperienceDatabase/ElasticHotel/Version_2";
import {AIInvestigationDescription, AIInvestigationTechnologies} from "./ExperienceDatabase/ElasticHotel/AIInvestigation";
import {personalProjectsDescription, personalProjectsTechnologies} from "./ExperienceDatabase/SkollARS/PersonalProjects";
import {amoebaAIDescription, amoebaAITechnologies} from "./ExperienceDatabase/AmoebaAI/AmoebaAI";
import {professorDescription, professorTechnologies} from "./ExperienceDatabase/ORT/Professor";

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
                <ExperienceTitle titleLink="https://elastic-frontend.vercel.app/" linkedTitle="Version 2"/>
                {versionTwoTechnologies}
                {versionTwoDescription}
                <ExperienceTitle titleLink={"https://github.com/alvaroscelza/ai-experiment"} linkedTitle="AI Investigation"/>
                {AIInvestigationTechnologies}
                {AIInvestigationDescription}
                <ExperienceTitle titleLink="https://backend.elastichotel.com/login" linkedTitle="Version 1"/>
                {versionOneTechnologies}
                {versionOneDescription}

                <CompanyTitle companyImage="/static/images/create-thrive.jpg" companyImageAltText="create-thrive" companyWebLink="https://www.createthrive.com/" companyName="CreateThrive"/>
                <ExperienceTitle titleLink="https://www.convexlabs.xyz/" linkedTitle="Convex Labs" restOfTitle="- NFT Theft Detection"/>
                {convexTechnologies}
                {convexDescription}
                <ExperienceTitle titleLink="https://www.nonerds.com/" linkedTitle="No Nerds No Problem" restOfTitle="- Medl"/>
                {noNerdsTechnologies}
                {noNerdsDescription}
                <ExperienceTitle titleLink="https://www.getkard.com/" linkedTitle="Kard" restOfTitle="- RewardsAPIs"/>
                {kardTechnologies}
                {kardDescription}
                <ExperienceTitle titleLink="https://us.sunpower.com/" linkedTitle="Sunpower" restOfTitle="- InstantDesign"/>
                {sunpowerInstantDesignTechnologies}
                {sunpowerInstantDesignDescription}

                <CompanyTitle companyImage="/static/images/skollars.png" companyImageAltText="SkollARS" companyWebLink="https://skollars.com/" companyName="SkollARS"/>
                {skollarsDescription}
                <ExperienceTitle restOfTitle="Personal Projects"/>
                {personalProjectsTechnologies}
                {personalProjectsDescription}
                <ExperienceTitle titleLink="https://www.taurus-dev.site/" linkedTitle="Taurus V2"/>
                {taurus2Technologies}
                {taurus2Description}
                <ExperienceTitle titleLink="https://alvaroscelza.github.io/" linkedTitle="Personal Website V2"/>
                {personalWebsiteV2Technologies}
                {personalWebsiteV2Description}
                <ExperienceTitle titleLink="https://skollars.com/" linkedTitle="SkollARS Website"/>
                {skollarsWebsiteTechnologies}
                {skollarsWebsiteDescription}
                <ExperienceTitle restOfTitle="Personal Website"/>
                {personalWebsiteTechnologies}
                {personalWebsiteDescription}
                <ExperienceTitle restOfTitle="FinApp"/>
                {finappTechnologies}
                {finappDescription}
                <ExperienceTitle restOfTitle="Taurus"/>
                {taurusTechnologies}
                {taurusDescription}
                <ExperienceTitle restOfTitle="Shooting Range"/>
                {shootingRangeTechnologies}
                {shootingRangeDescription}
                <ExperienceTitle restOfTitle="Mortuary DEMAL SA"/>
                {mortuaryTechnologies}
                {mortuaryDescription}
                <ExperienceTitle restOfTitle="Claims and Complaints"/>
                {claimsAndComplaintsTechnologies}
                {claimsAndComplaintsDescription}
                <ExperienceTitle restOfTitle="publisher"/>
                {publisherTechnologies}
                {publisherDescription}
                <ExperienceTitle titleLink="https://github.com/alvaroscelza/instagram-unfollower" linkedTitle="instagram_unfollower"/>
                {instagramUnfollowerTechnologies}
                {instagramUnfollowerDescription}
                <ExperienceTitle titleLink="https://fi.ort.edu.uy/77855/33/pimbay:-que-estas-para-hacer-hoy-red-social-orientada-a-actividades.html" linkedTitle="Pimbay: ¿Qué estás para hacer hoy?"/>
                {pimbayTechnologies}
                {pimbayDescription}
                <ExperienceTitle restOfTitle="Beaspa V2"/>
                {beaspa2Technologies}
                {beaspa2Description}
                <ExperienceTitle restOfTitle="Beaspa"/>
                {beaspaTechnologies}
                {beaspaDescription}
                <ExperienceTitle restOfTitle="Miro y Entiendo"/>
                {miroYEntiendoTechnologies}
                {miroYEntiendoDescription}
                <ExperienceTitle restOfTitle="Distribuidora Saturno"/>
                {distribuidoraSaturnoTechnologies}
                {distribuidoraSaturnoDescription}
                <ExperienceTitle restOfTitle="Juez Online ORT"/>
                {juezOnlineORTTechnologies}
                {juezOnlineORTDescription}

                <CompanyTitle companyImage="/static/images/ripio.png" companyImageAltText="Ripio" companyWebLink="https://www.ripio.com/ar/" companyName="Ripio"/>
                <ExperienceTitle restOfTitle="OTC"/>
                {otcTechnologies}
                {otcDescription}
                <ExperienceTitle restOfTitle="Paymatico Webhooks"/>
                {paymaticoTechnologies}
                {paymaticoDescription}
                <ExperienceTitle restOfTitle="Eventually"/>
                {eventuallyTechnologies}
                {eventuallyDescription}
                <ExperienceTitle restOfTitle="Documenting Crons"/>
                {documentingCronsTechnologies}
                {documentingCronsDescription}
                <ExperienceTitle restOfTitle="Documenting our APIs for third parties"/>
                {documentingAPIsTechnologies}
                {documentingAPIsDescription}
                <ExperienceTitle restOfTitle="Promotion Codes - Requirements Analysis"/>
                {promotionCodesTechnologies}
                {promotionCodesDescription}
                <ExperienceTitle restOfTitle="Users Control Service - Documentation Improvement"/>
                {usersControlServiceTechnologies}
                {usersControlServiceDescription}
                <ExperienceTitle restOfTitle="Documentation Processes"/>
                {documentationProcessesTechnologies}
                {documentationProcessesDescription}
                <ExperienceTitle restOfTitle="rp_card_authorizator"/>
                {rp_card_authorizatorTechnologies}
                {rp_card_authorizatorDescription}
                <ExperienceTitle restOfTitle="Conductor"/>
                {ConductorTechnologies}
                {ConductorDescription}

                <CompanyTitle companyImage="/static/images/bps.png" companyImageAltText="BPS" companyWebLink="https://www.bps.gub.uy/"
                              companyName="Banco de Previsión Social"/>
                <ExperienceTitle restOfTitle="SDES Conectados"/>
                {SDESConectadosTechnologies}
                {SDESConectadosDescription}
                <ExperienceTitle restOfTitle="pre_commit_hooks"/>
                {PreCommitHooksTechnologies}
                {PreCommitHooksDescription}
                <ExperienceTitle restOfTitle="GRP"/>
                {GRPTechnologies}
                {GRPDescription}

                <CompanyTitle companyImage="/static/images/bps.png" companyImageAltText="ORT" companyWebLink="https://www.ort.edu.uy/"
                              companyName="Universidad ORT Uruguay"/>
                <ExperienceTitle restOfTitle="Professor of Programming I"/>
                {professorTechnologies}
                {professorDescription}

                <CompanyTitle companyImage="/static/images/dnm.gif" companyImageAltText="DNM"
                              companyWebLink="https://www.gub.uy/migracion"
                              companyName="Dirección Nacional de Migración"/>
                <ExperienceTitle restOfTitle="Procedures Record v2"/>
                {ProceduresRecord2Technologies}
                {ProceduresRecord2Description}
                <ExperienceTitle restOfTitle="Procedures Record"/>
                {ProceduresRecordTechnologies}
                {ProceduresRecordDescription}
            </div>
        </>
    );
}

export default ExperiencePage;

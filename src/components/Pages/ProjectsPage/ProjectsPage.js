import classes from "../Pages.module.css";
import {useEffect} from "react";
import createThriveImage from '../../../images/create-thrive.jpg';
import skollarsImage from '../../../images/skollars.png';
import ripioImage from '../../../images/ripio.png';
import BPSImage from '../../../images/bps.png';
import DNMImage from '../../../images/dnm.gif';
import CompanyTitle from "./ProjectsPageComponents/CompanyTitle";
import ProjectTitle from "./ProjectsPageComponents/ProjectTitle";
import {
    sunpowerInstantDesignTechnologies,
    sunpowerInstantDesignDescription
} from "./ProjectsDatabase/CreateThrive/SunpowerInstantDesign";
import {skollarsDescription} from "./ProjectsDatabase/SkollARS/SkollARS";
import {skollarsWebsiteDescription, skollarsWebsiteTechnologies} from "./ProjectsDatabase/SkollARS/SkollARSWebsite";
import {personalWebsiteDescription, personalWebsiteTechnologies} from "./ProjectsDatabase/SkollARS/PersonalWebsite";
import {finappDescription, finappTechnologies} from "./ProjectsDatabase/SkollARS/FinAPP";
import {taurusDescription, taurusTechnologies} from "./ProjectsDatabase/SkollARS/Taurus";
import {shootingRangeDescription, shootingRangeTechnologies} from "./ProjectsDatabase/SkollARS/ShootingRange";
import {mortuaryDescription, mortuaryTechnologies} from "./ProjectsDatabase/SkollARS/Mortuary";
import {
    claimsAndComplaintsDescription,
    claimsAndComplaintsTechnologies
} from "./ProjectsDatabase/SkollARS/ClaimsAndComplaints";
import {publisherDescription, publisherTechnologies} from "./ProjectsDatabase/SkollARS/Publisher";
import {
    instagramUnfollowerDescription,
    instagramUnfollowerTechnologies
} from "./ProjectsDatabase/SkollARS/InstagramUnfollower";
import {pimbayDescription, pimbayTechnologies} from "./ProjectsDatabase/SkollARS/Pimbay";
import {
    beaspa2Description,
    beaspa2Technologies,
} from "./ProjectsDatabase/SkollARS/Beaspa2";
import {beaspaDescription, beaspaTechnologies} from "./ProjectsDatabase/SkollARS/Beaspa";
import {miroYEntiendoDescription, miroYEntiendoTechnologies} from "./ProjectsDatabase/SkollARS/MiroYEntiendo";
import {
    distribuidoraSaturnoDescription,
    distribuidoraSaturnoTechnologies
} from "./ProjectsDatabase/SkollARS/DistribuidoraSaturno";
import {juezOnlineORTDescription, juezOnlineORTTechnologies} from "./ProjectsDatabase/SkollARS/JuezOnlineORT";
import {otcDescription, otcTechnologies} from "./ProjectsDatabase/Ripio/OTC";
import {paymaticoDescription, paymaticoTechnologies} from "./ProjectsDatabase/Ripio/Paymatico";
import {eventuallyDescription, eventuallyTechnologies} from "./ProjectsDatabase/Ripio/Eventually";
import {documentingCronsDescription, documentingCronsTechnologies} from "./ProjectsDatabase/Ripio/DocumentingCrons";
import {documentingAPIsDescription, documentingAPIsTechnologies} from "./ProjectsDatabase/Ripio/DocumentingAPIs";
import {promotionCodesDescription, promotionCodesTechnologies} from "./ProjectsDatabase/Ripio/PromotionCodes";
import {
    usersControlServiceDescription,
    usersControlServiceTechnologies
} from "./ProjectsDatabase/Ripio/UsersControlService";
import {
    documentationProcessesDescription,
    documentationProcessesTechnologies
} from "./ProjectsDatabase/Ripio/DocumentationProcesses";
import {
    rp_card_authorizatorDescription,
    rp_card_authorizatorTechnologies
} from "./ProjectsDatabase/Ripio/rp_card_authorizator";
import {ConductorDescription, ConductorTechnologies} from "./ProjectsDatabase/Ripio/Conductor";
import {SDESConectadosDescription, SDESConectadosTechnologies} from "./ProjectsDatabase/BPS/SDESConectados";
import {PreCommitHooksDescription, PreCommitHooksTechnologies} from "./ProjectsDatabase/BPS/PreCommitHooks";
import {GRPDescription, GRPTechnologies} from "./ProjectsDatabase/BPS/GRP";

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Projects"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Projects
            </h1>

            <div className={classes.textAlignCenter}>
                <CompanyTitle companyImage={createThriveImage} companyImageAltText="create-thrive"
                              companyWebLink="https://www.createthrive.com/" companyName="CreateThrive"/>
                <ProjectTitle titleLink="https://us.sunpower.com/" linkedTitle="Sunpower"
                              restOfTitle="- InstantDesign"/>
                {sunpowerInstantDesignTechnologies}
                {sunpowerInstantDesignDescription}

                <CompanyTitle companyImage={skollarsImage} companyImageAltText="SkollARS"
                              companyWebLink="https://skollars.com/" companyName="SkollARS"/>
                {skollarsDescription}
                <ProjectTitle restOfTitle="SkollARS Website"/>
                {skollarsWebsiteTechnologies}
                {skollarsWebsiteDescription}
                <ProjectTitle restOfTitle="Personal Website"/>
                {personalWebsiteTechnologies}
                {personalWebsiteDescription}
                <ProjectTitle restOfTitle="FinApp"/>
                {finappTechnologies}
                {finappDescription}
                <ProjectTitle restOfTitle="Taurus"/>
                {taurusTechnologies}
                {taurusDescription}
                <ProjectTitle restOfTitle="Shooting Range"/>
                {shootingRangeTechnologies}
                {shootingRangeDescription}
                <ProjectTitle restOfTitle="Mortuary DEMAL SA"/>
                {mortuaryTechnologies}
                {mortuaryDescription}
                <ProjectTitle restOfTitle="Claims and Complaints"/>
                {claimsAndComplaintsTechnologies}
                {claimsAndComplaintsDescription}
                <ProjectTitle restOfTitle="publisher"/>
                {publisherTechnologies}
                {publisherDescription}
                <ProjectTitle restOfTitle="instagram_unfollower"/>
                {instagramUnfollowerTechnologies}
                {instagramUnfollowerDescription}
                <ProjectTitle restOfTitle="Pimbay: ¿Qué estás para hacer hoy?"/>
                {pimbayTechnologies}
                {pimbayDescription}
                <ProjectTitle restOfTitle="Beaspa V2"/>
                {beaspa2Technologies}
                {beaspa2Description}
                <ProjectTitle restOfTitle="Beaspa"/>
                {beaspaTechnologies}
                {beaspaDescription}
                <ProjectTitle restOfTitle="Miro y Entiendo"/>
                {miroYEntiendoTechnologies}
                {miroYEntiendoDescription}
                <ProjectTitle restOfTitle="Distribuidora Saturno"/>
                {distribuidoraSaturnoTechnologies}
                {distribuidoraSaturnoDescription}
                <ProjectTitle restOfTitle="Juez Online ORT"/>
                {juezOnlineORTTechnologies}
                {juezOnlineORTDescription}

                <CompanyTitle companyImage={ripioImage} companyImageAltText="Ripio"
                              companyWebLink="https://www.ripio.com/ar/" companyName="Ripio"/>
                <ProjectTitle restOfTitle="OTC"/>
                {otcTechnologies}
                {otcDescription}
                <ProjectTitle restOfTitle="Paymatico Webhooks"/>
                {paymaticoTechnologies}
                {paymaticoDescription}
                <ProjectTitle restOfTitle="Eventually"/>
                {eventuallyTechnologies}
                {eventuallyDescription}
                <ProjectTitle restOfTitle="Documenting Crons"/>
                {documentingCronsTechnologies}
                {documentingCronsDescription}
                <ProjectTitle restOfTitle="Documenting our APIs for third parties"/>
                {documentingAPIsTechnologies}
                {documentingAPIsDescription}
                <ProjectTitle restOfTitle="Promotion Codes - Requirements Analysis"/>
                {promotionCodesTechnologies}
                {promotionCodesDescription}
                <ProjectTitle restOfTitle="Users Control Service - Documentation Improvement"/>
                {usersControlServiceTechnologies}
                {usersControlServiceDescription}
                <ProjectTitle restOfTitle="Documentation Processes"/>
                {documentationProcessesTechnologies}
                {documentationProcessesDescription}
                <ProjectTitle restOfTitle="rp_card_authorizator"/>
                {rp_card_authorizatorTechnologies}
                {rp_card_authorizatorDescription}
                <ProjectTitle restOfTitle="Conductor"/>
                {ConductorTechnologies}
                {ConductorDescription}

                <CompanyTitle companyImage={BPSImage} companyImageAltText="BPS" companyWebLink="https://www.bps.gub.uy/"
                              companyName="Banco de Previsión Social"/>
                <ProjectTitle restOfTitle="SDES Conectados"/>
                {SDESConectadosTechnologies}
                {SDESConectadosDescription}
                <ProjectTitle restOfTitle="pre_commit_hooks"/>
                {PreCommitHooksTechnologies}
                {PreCommitHooksDescription}
                <ProjectTitle restOfTitle="GRP"/>
                {GRPTechnologies}
                {GRPDescription}

                <CompanyTitle companyImage={DNMImage} companyImageAltText="DNM"
                              companyWebLink="https://www.gub.uy/migracion"
                              companyName="Dirección Nacional de Migración"/>
            </div>
        </>
    );
}

export default ProjectsPage;

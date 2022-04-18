import classes from "../Pages.module.css";
import {useEffect} from "react";
import createThriveImage from '../../../images/create-thrive.jpg';
import skollarsImage from '../../../images/skollars.png';
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
            </div>
        </>
    );
}

export default ProjectsPage;

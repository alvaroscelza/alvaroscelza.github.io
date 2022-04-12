import classes from "../Pages.module.css";
import {useEffect} from "react";
import createThriveImage from '../../../images/create-thrive.jpg';
import skollarsImage from '../../../images/skollars.png';
import CompanyTitle from "./ProjectsPageComponents/CompanyTitle";
import ProjectTitle from "./ProjectsPageComponents/ProjectTitle";
import {sunpowerInstantDesignTechnologies, sunpowerInstantDesignDescription} from "./ProjectsDatabase/CreateThrive/SunpowerInstantDesign";
import {skollarsDescription} from "./ProjectsDatabase/SkollARS/SkollARS";
import {skollarsWebsiteDescription, skollarsWebsiteTechnologies} from "./ProjectsDatabase/SkollARS/SkollARSWebsite";
import {personalWebsiteDescription, personalWebsiteTechnologies} from "./ProjectsDatabase/SkollARS/PersonalWebsite";
import {finappDescription, finappTechnologies} from "./ProjectsDatabase/SkollARS/finapp";
import {taurusDescription, taurusTechnologies} from "./ProjectsDatabase/SkollARS/taurus";
import {shootingRangeDescription, shootingRangeTechnologies} from "./ProjectsDatabase/SkollARS/shootingRange";

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
                <ProjectTitle titleLink="https://us.sunpower.com/" linkedTitle="Sunpower" restOfTitle="- InstantDesign"/>
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
            </div>
        </>
    );
}

export default ProjectsPage;

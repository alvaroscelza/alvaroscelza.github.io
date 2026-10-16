import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import CompanyTitle from "../ExperiencePage/ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "../ExperiencePage/ExperiencePageComponents/ExperienceTitle";
import {tabellioDescription, tabellioTechnologies} from "./ProjectsDatabase/Tabellio";
import {finAppDescription, finAppTechnologies} from "./ProjectsDatabase/FinApp";

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
                <CompanyTitle companyImage="/static/images/tabellio.svg" companyImageAltText="Tabellio"
                              companyWebLink="https://www.tabellio.com.uy/" companyName="Tabellio"/>
                <ExperienceTitle restOfTitle="Personal project"/>
                {tabellioTechnologies}
                {tabellioDescription}

                <CompanyTitle companyImage="/static/images/finapp.png" companyImageAltText="FinApp"
                              companyWebLink="https://finapp-ashy.vercel.app/" companyName="FinApp"/>
                <ExperienceTitle restOfTitle="Personal project"/>
                {finAppTechnologies}
                {finAppDescription}
            </div>
        </>
    );
}

export default ProjectsPage;

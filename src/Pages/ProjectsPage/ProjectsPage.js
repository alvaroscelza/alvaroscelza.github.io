import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import CompanyTitle from "../ExperiencePage/ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "../ExperiencePage/ExperiencePageComponents/ExperienceTitle";
import {tabellioDescription, tabellioTechnologies} from "./ProjectsDatabase/Tabellio";
import {finAppDescription, finAppTechnologies} from "./ProjectsDatabase/FinApp";
import {claudePluginDescription, claudePluginTechnologies} from "./ProjectsDatabase/ClaudePlugin";
import {djangoTemplateDescription, djangoTemplateTechnologies} from "./ProjectsDatabase/DjangoTemplate";
import {sentimentDescription, sentimentTechnologies} from "./ProjectsDatabase/UserReviewsSentiment";

const githubImage = "/static/images/github.png";

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Personal Projects"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Personal Projects
            </h1>

            <div className={classes.textAlignCenter}>
                <h2 className={classes.sectionTitle}>Products</h2>

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

                <h2 className={classes.sectionTitle}>Tools & Experiments</h2>

                <CompanyTitle companyImage={githubImage} companyImageAltText="GitHub"
                              companyWebLink="https://github.com/alvaroscelza/claude-plugin" companyName="claude-plugin"/>
                <ExperienceTitle restOfTitle="Claude Code plugin"/>
                {claudePluginTechnologies}
                {claudePluginDescription}

                <CompanyTitle companyImage={githubImage} companyImageAltText="GitHub"
                              companyWebLink="https://github.com/alvaroscelza/django-template" companyName="django-template"/>
                <ExperienceTitle restOfTitle="Django project starter"/>
                {djangoTemplateTechnologies}
                {djangoTemplateDescription}

                <CompanyTitle companyImage={githubImage} companyImageAltText="GitHub"
                              companyWebLink="https://github.com/alvaroscelza/user-reviews-sentiment-analysis-ML"
                              companyName="User Reviews Sentiment Analysis"/>
                <ExperienceTitle restOfTitle="Hotel review sentiment"/>
                {sentimentTechnologies}
                {sentimentDescription}
            </div>
        </>
    );
}

export default ProjectsPage;

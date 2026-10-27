import classes from "../../components/UI/UI.module.css";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import CompanyTitle from "./ExperiencePageComponents/CompanyTitle";
import ExperienceTitle from "./ExperiencePageComponents/ExperienceTitle";
import ExperienceTechnologies from "./ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "./ExperiencePageComponents/VisualExperience";
import visual from "./ExperiencePageComponents/VisualExperience.module.css";
import InternalLink from "../../components/UI/InternalLink";
import RichText from "../../components/RichText";
import profile from "../../data/profile.mjs";

const ExperienceRole = ({role}) => {
    return (
        <div id={role.id}>
            <CompanyTitle
                companyImage={role.image}
                companyImageAltText={role.imageAlt}
                companyWebLink={role.companyUrl}
                companyName={role.company}
            />
            <ExperienceTitle restOfTitle={role.title}/>
            <ExperienceTechnologies>
                {role.technologies}
                <br/>
                <br/>
                {role.dates}
            </ExperienceTechnologies>
            <VisualExperience>
                {role.summary && (
                    <div className={visual.summarySection}>
                        <p className={visual.summaryText}>
                            <RichText runs={role.summary}/>
                        </p>
                    </div>
                )}
                {role.metrics && (
                    <div className={visual.metricsGrid}>
                        {role.metrics.map((metric) => (
                            <div className={visual.metricCard} key={metric.label}>
                                <div className={visual.metricValue}>{metric.value}</div>
                                <div className={visual.metricLabel}>{metric.label}</div>
                            </div>
                        ))}
                    </div>
                )}
                {role.diagram && (
                    <div className={visual.diagramSection}>
                        <div className={visual.diagramTitle}>{role.diagram.title}</div>
                        <img
                            src={role.diagram.src}
                            alt={role.diagram.alt}
                            className={visual.diagramImage}
                        />
                    </div>
                )}
                <ul className={visual.bulletList}>
                    {role.bullets.map((bullet, index) => (
                        <li key={index}>
                            <RichText runs={bullet}/>
                        </li>
                    ))}
                </ul>
            </VisualExperience>
        </div>
    );
};

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
                {profile.experienceHeading}
            </h1>

            <div className={classes.textAlignCenter}>
                {profile.experience.map((entry) => {
                    if (entry.kind === "break") {
                        return (
                            <div id={entry.id} className={classes.careerBreak} key={entry.id}>
                                <h2 className={classes.h2}>
                                    <InternalLink link={entry.link} text={entry.text}/>
                                </h2>
                            </div>
                        );
                    }
                    return <ExperienceRole role={entry} key={entry.company}/>;
                })}
            </div>
        </>
    );
}

export default ExperiencePage;

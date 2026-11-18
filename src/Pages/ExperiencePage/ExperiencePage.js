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

const Diagram = ({diagram}) => {
    if (diagram.scroll) {
        return (
            <figure className={visual.diagramSection}>
                <div className={visual.diagramTitle}>{diagram.title}</div>
                {diagram.caption && (
                    <p className={visual.diagramCaption}>{diagram.caption}</p>
                )}
                <div
                    className={visual.diagramScroller}
                    tabIndex={0}
                    role="region"
                    aria-label={`${diagram.title}. Scroll horizontally to see the full diagram.`}
                >
                    <a
                        className={visual.diagramScrollLink}
                        href={diagram.src}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={diagram.src}
                            alt={diagram.alt}
                            width={diagram.width}
                            height={diagram.height}
                            draggable="false"
                            className={visual.diagramScrollImage}
                            style={{width: diagram.width, height: diagram.height, maxWidth: "none"}}
                        />
                    </a>
                </div>
            </figure>
        );
    }

    return (
        <div className={visual.diagramSection}>
            <div className={visual.diagramTitle}>{diagram.title}</div>
            <img
                src={diagram.src}
                alt={diagram.alt}
                className={visual.diagramImage}
            />
        </div>
    );
};

const BulletList = ({bullets, className}) => (
    <ul className={className}>
        {bullets.map((bullet, index) => (
            <li key={index}>
                <RichText runs={bullet}/>
            </li>
        ))}
    </ul>
);

const ExperienceRole = ({role}) => {
    const afterBullet = role.diagram?.afterBullet;
    const diagramInList = Number.isInteger(afterBullet);
    const bulletsBefore = diagramInList ? role.bullets.slice(0, afterBullet + 1) : role.bullets;
    const bulletsAfter = diagramInList ? role.bullets.slice(afterBullet + 1) : [];

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
                {role.diagram && !diagramInList && <Diagram diagram={role.diagram}/>}
                <BulletList
                    bullets={bulletsBefore}
                    className={diagramInList ? `${visual.bulletList} ${visual.bulletListFollowedByDiagram}` : visual.bulletList}
                />
                {diagramInList && <Diagram diagram={role.diagram}/>}
                {bulletsAfter.length > 0 && (
                    <BulletList bullets={bulletsAfter} className={visual.bulletList}/>
                )}
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

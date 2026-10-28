import ui from "../UI/UI.module.css";
import classes from "./Certifications.module.css";
import ExternalLink from "../UI/ExternalLink";
import profile from "../../data/profile.mjs";

const Certifications = () => (
    <section className={ui.moreAboutMeSection} id="certifications" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading" className={ui.sectionTitle}>{profile.certifications[0].heading}</h2>
        {profile.certifications.map((certification) => (
            <article className={`${ui.aboutMeCard} ${classes.card}`} key={certification.title}>
                <a
                    className={classes.badgeLink}
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className={classes.badgeImage}
                        src={certification.image}
                        width={certification.imageWidth}
                        height={certification.imageHeight}
                        alt={certification.imageAlt}
                    />
                </a>
                <div className={ui.aboutMeContent}>
                    <h3 className={ui.aboutMeTitle}>{certification.title}</h3>
                    <ul className={ui.aboutMeList}>
                        <li>{certification.issuer}</li>
                        <li>
                            Issued <time dateTime={certification.issued.dateTime}>{certification.issued.label}</time>
                            {" · "}
                            Expires <time dateTime={certification.expires.dateTime}>{certification.expires.label}</time>
                        </li>
                        <li>{certification.description}</li>
                        <li>
                            <ExternalLink link={certification.url} text={certification.linkText}/>
                        </li>
                    </ul>
                </div>
            </article>
        ))}
        <article className={`${ui.aboutMeCard} ${classes.listCard}`}>
            <div className={ui.aboutMeContent}>
                <ul className={ui.aboutMeList}>
                    {profile.courses.items.map((course) => (
                        <li key={course.title}>
                            {course.url ? <ExternalLink link={course.url} text={course.title}/> : course.title}
                            {` · ${course.issuer} · ${course.issued}`}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    </section>
);

export default Certifications;

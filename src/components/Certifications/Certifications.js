import ui from "../UI/UI.module.css";
import classes from "./Certifications.module.css";
import ExternalLink from "../UI/ExternalLink";
import profile from "../../data/profile.mjs";

const Certifications = () => {
    return profile.certifications.map((certification) => (
        <section className={ui.moreAboutMeSection} id="certifications" aria-labelledby="certifications-heading" key={certification.title}>
            <h2 id="certifications-heading" className={ui.sectionTitle}>{certification.heading}</h2>
            <article className={`${ui.aboutMeCard} ${classes.card}`}>
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
        </section>
    ));
}

export default Certifications;

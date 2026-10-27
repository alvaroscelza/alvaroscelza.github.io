import ui from "../UI/UI.module.css";
import classes from "./Certifications.module.css";
import ExternalLink from "../UI/ExternalLink";

const BADGE_URL = "https://www.credly.com/badges/cab05229-af31-4de6-969c-9ef3bea12247/public_url";
const BADGE_IMAGE = "/static/images/claude-partner-badge-claude-code.png";

const Certifications = () => {
    return (
        <section className={ui.moreAboutMeSection} id="certifications" aria-labelledby="certifications-heading">
            <h2 id="certifications-heading" className={ui.sectionTitle}>Certifications</h2>
            <article className={`${ui.aboutMeCard} ${classes.card}`}>
                <a
                    className={classes.badgeLink}
                    href={BADGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className={classes.badgeImage}
                        src={BADGE_IMAGE}
                        width="672"
                        height="352"
                        alt="Claude Partner Badge - Claude Code, issued by Anthropic"
                    />
                </a>
                <div className={ui.aboutMeContent}>
                    <h3 className={ui.aboutMeTitle}>Claude Partner Badge - Claude Code</h3>
                    <ul className={ui.aboutMeList}>
                        <li>Anthropic, via Credly</li>
                        <li>
                            Issued <time dateTime="2026-10-27">October 27, 2026</time>
                            {" · "}
                            Expires <time dateTime="2027-04-27">April 27, 2027</time>
                        </li>
                        <li>
                            Earned through an 8-course learning path and a capstone assessment covering scoping,
                            deploying, configuring, and running Claude Code activations (configuration packs, custom
                            commands, Skills, hooks, and telemetry).
                        </li>
                        <li>
                            <ExternalLink link={BADGE_URL} text="View badge on Credly"/>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default Certifications;

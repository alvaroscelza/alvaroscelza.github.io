import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";
import InternalLink from "../components/UI/InternalLink";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";
import Certifications from "../components/Certifications/Certifications";
import profile from "../data/profile.mjs";

const HomePage = () => {
    useEffect(() => {
        document.title = profile.documentTitle
    }, []);

    const uruguayanFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg";
    const italianFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ee-1f1f9.svg";
    const unitedKingdomFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg";

    return (
        <>
            <div className={classes.heroSection}>
                <h1 className={classes.heroTitle}>
                    {profile.hero.title}
                </h1>
                <p className={classes.heroSubtitle}>
                    {profile.hero.subtitle}
                </p>
                <p className={classes.heroMeta}>
                    {profile.hero.location}
                </p>
                <ul className={classes.heroHighlights}>
                    {profile.hero.highlights.map((highlight) => (
                        <li key={highlight.link}>
                            <InternalLink link={highlight.link} text={highlight.text}/>
                        </li>
                    ))}
                </ul>
                <a className={classes.cvDownload} href={`${process.env.PUBLIC_URL}/${profile.cvFileName}`} download={profile.cvFileName}>
                    Download CV (PDF)
                </a>
            </div>

            <div className={classes.capabilitiesSection}>
                <h2 className={classes.sectionTitle}>
                    I manage the entire software development lifecycle:
                </h2>
                
                <div className={classes.capabilitiesGrid}>
                    <div className={classes.capabilityCard}>
                        <div className={classes.capabilityIcon}>📋</div>
                        <div className={classes.capabilityContent}>
                            <h3 className={classes.capabilityTitle}>Analysis & Design</h3>
                        <ul className={classes.capabilityList}>
                            <li>Active stakeholder communication</li>
                            <li>Agile methodologies (Scrum, Lean Startup)</li>
                            <li>Design Thinking & Continuous Improvement</li>
                            <li>Service architecture design (monolithic & modular)</li>
                        </ul>
                        </div>
                    </div>
                    
                    <div className={classes.capabilityCard}>
                        <div className={classes.capabilityIcon}>💻</div>
                        <div className={classes.capabilityContent}>
                            <h3 className={classes.capabilityTitle}>Development</h3>
                            <ul className={classes.capabilityList}>
                                <li><strong>Backend:</strong> Python, Django, Flask</li>
                                <li><strong>Frontend:</strong> React, JavaScript, TypeScript</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={classes.capabilityCard}>
                        <div className={classes.capabilityIcon}>🧪</div>
                        <div className={classes.capabilityContent}>
                            <h3 className={classes.capabilityTitle}>QA & Testing</h3>
                            <ul className={classes.capabilityList}>
                                <li>Multiple testing techniques</li>
                                <li>Quality assurance and stability</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={classes.capabilityCard}>
                        <div className={classes.capabilityIcon}>🚀</div>
                        <div className={classes.capabilityContent}>
                            <h3 className={classes.capabilityTitle}>Operations & Maintenance</h3>
                            <ul className={classes.capabilityList}>
                            <li>CI/CD pipelines (GitHub Actions)</li>
                            <li>Infrastructure as Code (Terraform)</li>
                            <li>Cloud infrastructure (AWS, Azure)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.twoColumnSection}>
                <div className={classes.technologiesSection}>
                    <h2 className={classes.sectionTitle}>{profile.keyTechnologies.heading}</h2>
                    {profile.keyTechnologies.groups.map((group) => (
                        <div className={classes.techGroup} key={group.label}>
                            <span className={classes.techLabel}>{group.label}:</span>
                            {group.items
                                ? group.items.map((item) => (
                                    <span className={classes.techBadge} key={item}>{item}</span>
                                ))
                                : <InternalLink link={group.link} text={group.linkText}/>}
                        </div>
                    ))}
                </div>

                <div className={classes.knowledgeSearchSection}>
                    <h2 className={classes.sectionTitle}>🔍 What do you need me to know?</h2>
                    <p className={classes.knowledgeSearchDescription}>
                        Search for any technology to see my experience level, category, and detailed description.
                    </p>
                    <KnowledgeSearch />
                </div>
            </div>

            <div className={classes.moreAboutMeSection} id="education">
                <h2 className={classes.sectionTitle}>{profile.education.heading}</h2>
                <p className={classes.aboutMeText}>
                    <strong>{profile.education.school}</strong> — {profile.education.credential}
                </p>
            </div>

            <div className={classes.moreAboutMeSection}>
                <h2 className={classes.sectionTitle}>More about Me</h2>
                
                <div className={classes.aboutMeGrid}>
                    <div className={classes.aboutMeCard}>
                        <span className={classes.aboutMeIcon}>💡</span>
                        <div className={classes.aboutMeContent}>
                            <h3 className={classes.aboutMeTitle}>Interests</h3>
                            <ul className={classes.aboutMeList}>
                                <li><strong>AI</strong> & <strong>Machine Learning</strong> (<ExternalLink link={profile.links.kaggle.href} text={profile.links.kaggle.text}/>)</li>
                                <li>Crypto, blockchain & emerging technologies</li>
                                <li>Continuous improvement & high-quality solutions</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={classes.aboutMeCard}>
                        <span className={classes.aboutMeIcon}>🌍</span>
                        <div className={classes.aboutMeContent}>
                            <h3 className={classes.aboutMeTitle}>Location & Languages</h3>
                            <ul className={classes.aboutMeList}>
                                <li>
                                    <img className={classes.flagIcon} src={uruguayanFlagLink} alt="🇺🇾"/>
                                    <img className={classes.flagIcon} src={italianFlagLink} alt="🇮🇹"/>
                                    {profile.languages.citizenship}
                                </li>
                                <li>
                                    <img className={classes.flagIcon} src={unitedKingdomFlagLink} alt="🇬🇧"/>
                                    {profile.languages.fluent}
                                </li>
                                <li>
                                    <span className={classes.flagIcon}>✈️</span>
                                    {profile.languages.relocation}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Certifications />

            <div className={classes.moreAboutMeSection}>
                <div className={classes.ctaSection}>
                    <p className={classes.ctaText}>
                        Want to know more? Let's talk!
                    </p>
                    <ExternalLink 
                        link={profile.links.calendar.href} 
                        text={profile.links.calendar.text}
                        className={classes.calendarLink}
                    />
                </div>
            </div>
        </>
    );
}

export default HomePage;

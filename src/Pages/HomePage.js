import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";
import InternalLink from "../components/UI/InternalLink";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Home"
    }, []);

    const kaggleLink = "https://www.kaggle.com/ingalvaroscelza";
    const experienceLink = "/experience";
    const uruguayanFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg";
    const italianFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ee-1f1f9.svg";
    const unitedKingdomFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg";

    return (
        <>
            <div className={classes.heroSection}>
                <h1 className={classes.heroTitle}>
                    Full-Cycle Systems Engineer
                </h1>
                <p className={classes.heroSubtitle}>
                    with 12+ years of industry experience
                </p>
                <div className={classes.heroBadges}>
                    <span className={classes.heroBadge}>🏢 International Companies</span>
                    <span className={classes.heroBadge}>🚀 Startups</span>
                    <span className={classes.heroBadge}>🔧 Microservices</span>
                    <span className={classes.heroBadge}>📦 Monolithic</span>
                </div>
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
                                <li><strong>Backend:</strong> Python, Django, Flask, FastAPI</li>
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
                                <li>CI/CD pipelines (GitHub Actions, CircleCI)</li>
                                <li>Infrastructure as Code (Terraform)</li>
                                <li>Cloud infrastructure (AWS, Azure, GCloud)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.twoColumnSection}>
                <div className={classes.technologiesSection}>
                    <h2 className={classes.sectionTitle}>Key Technologies</h2>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>Backend:</span>
                        <span className={classes.techBadge}>Python</span>
                        <span className={classes.techBadge}>Django</span>
                        <span className={classes.techBadge}>Flask</span>
                        <span className={classes.techBadge}>FastAPI</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>Frontend:</span>
                        <span className={classes.techBadge}>React</span>
                        <span className={classes.techBadge}>JavaScript</span>
                        <span className={classes.techBadge}>TypeScript</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>Database:</span>
                        <span className={classes.techBadge}>PostgreSQL</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>Cloud:</span>
                        <span className={classes.techBadge}>AWS</span>
                        <span className={classes.techBadge}>Azure</span>
                        <span className={classes.techBadge}>GCloud</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>DevOps:</span>
                        <span className={classes.techBadge}>Terraform</span>
                        <span className={classes.techBadge}>GitHub Actions</span>
                        <span className={classes.techBadge}>CircleCI</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>More:</span>
                        <InternalLink link='/knowledge' text='View all technologies'/>
                    </div>
                </div>

                <div className={classes.knowledgeSearchSection}>
                    <h2 className={classes.sectionTitle}>🔍 What do you need me to know?</h2>
                    <p className={classes.knowledgeSearchDescription}>
                        Search for any technology to see my experience level, category, and detailed description.
                    </p>
                    <KnowledgeSearch />
                </div>
            </div>

            <div className={classes.moreAboutMeSection}>
                <h2 className={classes.sectionTitle}>More about Me</h2>
                
                <div className={classes.aboutMeGrid}>
                    <div className={classes.aboutMeCard}>
                        <span className={classes.aboutMeIcon}>💡</span>
                        <div className={classes.aboutMeContent}>
                            <h3 className={classes.aboutMeTitle}>Interests</h3>
                            <ul className={classes.aboutMeList}>
                                <li><strong>AI</strong> & <strong>Machine Learning</strong> (<ExternalLink link={kaggleLink} text="Kaggle"/>)</li>
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
                                    Uruguayan & Italian citizen
                                </li>
                                <li>
                                    <img className={classes.flagIcon} src={unitedKingdomFlagLink} alt="🇬🇧"/>
                                    Fluent in Spanish & English
                                </li>
                                <li>
                                    <span className={classes.flagIcon}>✈️</span>
                                    Open to relocation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={classes.ctaSection}>
                    <p className={classes.ctaText}>
                        Want to know more? Let's talk!
                    </p>
                    <ExternalLink 
                        link="https://calendar.app.google/vKUuMw3BbaUW2Qwx7" 
                        text="Schedule an interview"
                        className={classes.calendarLink}
                    />
                </div>
            </div>
        </>
    );
}

export default HomePage;

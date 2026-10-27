import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";
import InternalLink from "../components/UI/InternalLink";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";
import Certifications from "../components/Certifications/Certifications";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza – Backend & AI Engineer"
    }, []);

    const kaggleLink = "https://www.kaggle.com/ingalvaroscelza";
    const uruguayanFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg";
    const italianFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ee-1f1f9.svg";
    const unitedKingdomFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg";

    return (
        <>
            <div className={classes.heroSection}>
                <h1 className={classes.heroTitle}>
                    Backend & AI Engineer
                </h1>
                <p className={classes.heroSubtitle}>
                    Python/AWS, building LLM features in production (Claude, Bedrock, RAG). 10+ years. Currently at Blend360, embedded at Blackstone.
                </p>
                <p className={classes.heroMeta}>
                    Montevideo, Uruguay (UTC-3) · Remote · Italian citizen (EU work authorization)
                </p>
                <ul className={classes.heroHighlights}>
                    <li>
                        <InternalLink
                            link="/experience?role=promtior"
                            text="Solo-built serverless CSV ingestion at Promtior: 5 Lambdas, S3 streaming, up to 500k rows per file, Bedrock column mapping."
                        />
                    </li>
                    <li>
                        <InternalLink
                            link="/experience?role=amoeba"
                            text="RAG chat over customer financial data in production at Amoeba AI (Claude, OpenAI)."
                        />
                    </li>
                    <li>
                        <InternalLink
                            link="/experience?role=blend360"
                            text="Co-created Bifrost, a config-driven platform that lets Claude work across data, API and UI repos at Blackstone."
                        />
                    </li>
                </ul>
                <a className={classes.cvDownload} href={`${process.env.PUBLIC_URL}/Alvaro-Scelza-CV.pdf`} download="Alvaro-Scelza-CV.pdf">
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
                    <h2 className={classes.sectionTitle}>Key Technologies</h2>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>Backend:</span>
                        <span className={classes.techBadge}>Python</span>
                        <span className={classes.techBadge}>Django</span>
                        <span className={classes.techBadge}>Flask</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>AI / LLMs:</span>
                        <span className={classes.techBadge}>Claude</span>
                        <span className={classes.techBadge}>Bedrock</span>
                        <span className={classes.techBadge}>RAG</span>
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
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>DevOps:</span>
                        <span className={classes.techBadge}>Terraform</span>
                        <span className={classes.techBadge}>GitHub Actions</span>
                    </div>
                    <div className={classes.techGroup}>
                        <span className={classes.techLabel}>More:</span>
                        <InternalLink link='/knowledge' text='View all skills & technologies'/>
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

            <div className={classes.moreAboutMeSection} id="education">
                <h2 className={classes.sectionTitle}>Education</h2>
                <p className={classes.aboutMeText}>
                    <strong>Universidad ORT Uruguay</strong> — Engineer's degree, Computer Software Engineering (2012–2019)
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
            </div>

            <Certifications />

            <div className={classes.moreAboutMeSection}>
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

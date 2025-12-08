import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";
import ExternalLink from "../../../components/UI/ExternalLink";

const ripioTechnologies =
    <ExperienceTechnologies>
        Python, Django, Django REST Framework, PostgreSQL, JavaScript, Node.js, Express.js, MongoDB, AWS, Git, GitHub, CircleCI
        <br/>
        <br/>
        February 2020 to December 2021 - 1 year 11 months
    </ExperienceTechnologies>

const ripioDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Worked at <strong>Ripio</strong>, a leading cryptocurrency platform in Latin America, contributing to multiple critical systems including payment processing, VIP client services, and platform infrastructure. Played a key role in team restructuring and process improvement initiatives.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>1.11</div>
                <div className={classes.metricLabel}>Years</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Team Lead</div>
                <div className={classes.metricLabel}>Leadership Role</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Crypto</div>
                <div className={classes.metricLabel}>Payments Platform</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Brazil</div>
                <div className={classes.metricLabel}>Market Expansion</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>👥</span>
                <span>OTC - Team Leadership & VIP Services</span>
            </div>
            <p className={classes.contributionDescription}>
                Led a new development team as <strong>Team Leader</strong> for <strong>OTC (Over-The-Counter)</strong> services, Ripio's area focused on VIP clients operating with large transaction volumes. Applied <strong>agile methodologies</strong> and engineering best practices as part of Ripio's transition from monolithic to smaller, focused teams. This role involved team coordination, technical decision-making, and ensuring high-quality deliverables for high-value clients.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Team Leadership</span>
                <span className={classes.techTag}>Agile</span>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>VIP Services</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>💳</span>
                <span>Conductor - Crypto Debit Cards for Brazil</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed a web API to manage Ripio's new product in Brazil: <strong>debit cards for purchases using crypto</strong>. Built integration with <ExternalLink link="https://conductor.com.br/" text="Conductor"/> payment provider and implemented strict <strong>payment security and concurrency control</strong> to prevent double payments. The system managed payment synchronization between external provider and internal Balance DB, requiring robust transaction management and state synchronization.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Payment Integration</span>
                <span className={classes.techTag}>Concurrency Control</span>
                <span className={classes.techTag}>Security</span>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>Crypto Cards</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📚</span>
                <span>Documentation Processes & Architecture</span>
            </div>
            <p className={classes.contributionDescription}>
                Elaborated a plan of procedural changes based on <strong>PDCA</strong> methodology to improve Ripio's development processes during exponential growth (87.5% employee increase in second year). Implemented formal technical documentation standards, enforced README requirements, and introduced architectural diagrams (Allocation View, Components & Connectors View, Modules View). Established project management with <strong>Jira</strong> and created architecture documentation based on "Documenting Software Architectures: Views and Beyond".
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Process Improvement</span>
                <span className={classes.techTag}>Architecture Documentation</span>
                <span className={classes.techTag}>PDCA</span>
                <span className={classes.techTag}>Jira</span>
                <span className={classes.techTag}>Technical Documentation</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔧</span>
                <span>Additional Projects & Integrations</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed multiple microservices and integrations including: <strong>Paymatico webhooks</strong> for crypto payment notifications, <strong>Eventually</strong> event registration microservice using MongoDB, <strong>Users Control Service</strong> documentation and architecture improvements, API documentation for third parties, and various other platform enhancements. Worked extensively with Ripio's monolithic codebase (9+ years of existence) requiring deep investigation and careful integration.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Microservices</span>
                <span className={classes.techTag}>Webhooks</span>
                <span className={classes.techTag}>MongoDB</span>
                <span className={classes.techTag}>API Integration</span>
                <span className={classes.techTag}>Legacy Systems</span>
            </div>
        </div>
    </VisualExperience>;

export {ripioTechnologies, ripioDescription};


import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const skollarsTechnologies =
    <ExperienceTechnologies>
        Python, Django, Django REST Framework, PostgreSQL, Supabase, Render, OpenAI API, React, JavaScript, Node.js, Odoo, Stripe, WhatsApp Business API, Git, GitHub, AWS, Azure, GCloud
        <br/>
        <br/>
        September 2019 - Present
    </ExperienceTechnologies>

const skollarsDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Founded <strong>SkollARS</strong> in September 2019 as a personal innovation lab to experiment with emerging technologies while delivering affordable, high-impact software solutions to small businesses underserved by large development firms. Evolved into a full-fledged contracting practice, serving as a <strong>Software Systems Engineer</strong> for companies worldwide, leading end-to-end product lifecycles—from ideation and architecture to deployment and iteration. Fully self-funded and client-driven, treating every project as my own to design solutions that genuinely improve operations.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>2019</div>
                <div className={classes.metricLabel}>Founded</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>3 weeks</div>
                <div className={classes.metricLabel}>Fastest MVP</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Full-Cycle</div>
                <div className={classes.metricLabel}>End-to-End</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Worldwide</div>
                <div className={classes.metricLabel}>Global Clients</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🎯</span>
                <span>Mission & Vision</span>
            </div>
            <p className={classes.contributionDescription}>
                <strong>Mission:</strong> Deliver expert software consulting and development to small and medium-sized enterprises (SMEs)—and anyone excluded from big-factory ecosystems—enabling accessible digital transformation.
                <br/><br/>
                <strong>Vision:</strong> Drive the technologization of all economic layers in Uruguay and beyond.
                <br/><br/>
                <strong>Core Values:</strong> Honesty, responsibility, and authentic client partnership.
            </p>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🚀</span>
                <span>TurnoYa - SaaS Booking Platform</span>
            </div>
            <p className={classes.contributionDescription}>
                Built a <strong>SaaS booking platform</strong> with <strong>Stripe</strong> and <strong>WhatsApp Business API</strong> integration. Delivered <strong>MVP live in under 3 weeks</strong>, enabling small businesses to manage appointments and payments seamlessly through multiple channels.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>SaaS</span>
                <span className={classes.techTag}>Stripe</span>
                <span className={classes.techTag}>WhatsApp API</span>
                <span className={classes.techTag}>Rapid MVP</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>💰</span>
                <span>FinApp - Financial Literacy PWA</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed a <strong>financial literacy Progressive Web App</strong> with a <strong>2-tier referral engine</strong> (10% + 10% commissions). The platform educates users on financial management while providing a sustainable business model through referral incentives.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>PWA</span>
                <span className={classes.techTag}>Referral Engine</span>
                <span className={classes.techTag}>Financial Tech</span>
                <span className={classes.techTag}>Django</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🐄</span>
                <span>Taurus - Livestock Management System</span>
            </div>
            <p className={classes.contributionDescription}>
                Built a <strong>livestock management system</strong> for agricultural clients. A medium-term project designed to be redesigned and sold as a SaaS solution, demonstrating scalability planning and product evolution strategies.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>PostgreSQL</span>
                <span className={classes.techTag}>AWS</span>
                <span className={classes.techTag}>SaaS Planning</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📦</span>
                <span>All-in-One Business Software - ERP Solution</span>
            </div>
            <p className={classes.contributionDescription}>
                Delivered a <strong>centralized ERP solution</strong> for sales, inventory, invoicing, and more. Powered by <strong>Odoo</strong>, the system includes full implementation, hosting, and ongoing maintenance. This comprehensive solution supports business growth by centralizing all operations in a single platform.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>ERP</span>
                <span className={classes.techTag}>Odoo</span>
                <span className={classes.techTag}>Implementation</span>
                <span className={classes.techTag}>Hosting & Maintenance</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🌐</span>
                <span>Additional Projects & Services</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed multiple client solutions including: <strong>Pimbay</strong> social network for activities, <strong>mortuary management systems</strong>, <strong>shooting range booking systems</strong>, <strong>claims and complaints platforms</strong>, <strong>distributor management systems</strong>, <strong>university online judge systems</strong>, and various other business automation tools. Also built personal websites and portfolio sites, continuously experimenting with cutting-edge technologies and methodologies.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Full-Stack Development</span>
                <span className={classes.techTag}>Business Automation</span>
                <span className={classes.techTag}>Custom Solutions</span>
                <span className={classes.techTag}>Rapid Prototyping</span>
            </div>
        </div>

        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                <strong>Tech Stack:</strong> Mastered a modern tech stack (Python/Django, Supabase, Render, OpenAI API) and agile methodologies in high-uncertainty environments, consistently shipping production-ready systems with measurable user impact.
            </p>
        </div>
    </VisualExperience>;

export {skollarsTechnologies, skollarsDescription};


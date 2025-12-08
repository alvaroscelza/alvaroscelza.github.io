import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const createThriveTechnologies =
    <ExperienceTechnologies>
        Python, Django, Flask, PostgreSQL, JavaScript, Node.js, React, Vue.js, Docker, Docker-Compose, Redis, Celery, AWS, MongoDB, Serverless Framework, Git, GitHub, CircleCI, Neural Networks, CUDA
        <br/>
        <br/>
        January 2022 to February 2023 - 1 year 2 months
    </ExperienceTechnologies>

const createThriveDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Worked with <strong>CreateThrive</strong>, a software development agency, on multiple client projects across different industries including solar energy, blockchain security, and payments. Led development on complex systems requiring advanced technologies and legacy system modernization.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>1.2</div>
                <div className={classes.metricLabel}>Years</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>4</div>
                <div className={classes.metricLabel}>Client Projects</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>CUDA</div>
                <div className={classes.metricLabel}>GPU Computing</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Legacy</div>
                <div className={classes.metricLabel}>Modernization</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>⚡</span>
                <span>Sunpower InstantDesign - AI-Powered Solar Grid Generation</span>
            </div>
            <p className={classes.contributionDescription}>
                Led development on <strong>Sunpower's InstantDesign</strong>, one of CreateThrive's biggest clients. The system automatically generates solar panel grids for residences using <strong>CUDA</strong> for GPU computing and <strong>Neural Networks</strong> for intelligent grid optimization. Managed complex <strong>Docker and Docker-Compose</strong> infrastructure, set up IDE integration with containers, and built <strong>Flask API</strong> endpoints with React/Vue frontend for internal testing. Focused heavily on <strong>project maintenance and technical debt reduction</strong> for a legacy system developed 3 years ago where the original team had left, addressing numerous legacy issues while maintaining system stability.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>CUDA</span>
                <span className={classes.techTag}>Neural Networks</span>
                <span className={classes.techTag}>Docker</span>
                <span className={classes.techTag}>Flask</span>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>Vue.js</span>
                <span className={classes.techTag}>Legacy Systems</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔒</span>
                <span>Convex Labs - NFT Security Platform</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed security systems for NFT theft detection using <strong>Django</strong> backend and <strong>AWS serverless architecture</strong> (Lambda Functions, DynamoDB, API Gateway). The platform helps protect NFT collections, including clients like the <strong>Boring Ape NFT Collection</strong>, from theft and fraud in the web3 ecosystem.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Django</span>
                <span className={classes.techTag}>AWS Lambda</span>
                <span className={classes.techTag}>DynamoDB</span>
                <span className={classes.techTag}>Blockchain</span>
                <span className={classes.techTag}>Web3</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>💳</span>
                <span>Kard - Rewards Platform & No Nerds - Application Development</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed backend systems for <strong>Kard's rewards platform</strong> in the payments industry using <strong>Node.js</strong> and <strong>AWS Serverless Framework</strong> with authentication via AWS Cognito. Also provided development support for <strong>No Nerds No Problem</strong> client applications using <strong>Express.js</strong> and <strong>MongoDB</strong>, implementing comprehensive testing with Jest and Mocha, and CI/CD pipelines with CircleCI.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Node.js</span>
                <span className={classes.techTag}>Serverless Framework</span>
                <span className={classes.techTag}>Express.js</span>
                <span className={classes.techTag}>MongoDB</span>
                <span className={classes.techTag}>AWS Cognito</span>
                <span className={classes.techTag}>Testing</span>
            </div>
        </div>
    </VisualExperience>;

export {createThriveTechnologies, createThriveDescription};


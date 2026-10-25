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
        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>4</div>
                <div className={classes.metricLabel}>Client Projects</div>
            </div>
        </div>

        <ul className={classes.bulletList}>
            <li>
                Led <strong>Sunpower InstantDesign</strong> (one of CreateThrive&apos;s biggest clients). It generates residential solar-panel grids with <strong>CUDA</strong> and neural networks. I ran <strong>Docker Compose</strong>, wired the IDE to the containers, and built <strong>Flask</strong> API endpoints with a React/Vue UI for internal testing. The system was about 3 years old and the original team had left; I worked on maintenance and technical debt.
            </li>
            <li>
                Built NFT theft detection for <strong>Convex Labs</strong> with <strong>Django</strong> and AWS Lambda, DynamoDB, and API Gateway. Clients included the Bored Ape Yacht Club.
            </li>
            <li>
                Built the <strong>Kard</strong> rewards backend with <strong>Node.js</strong>, the AWS Serverless Framework, and Cognito.
            </li>
            <li>
                Supported <strong>No Nerds No Problem</strong> with <strong>Express.js</strong> and <strong>MongoDB</strong>, Jest and Mocha tests, and CircleCI.
            </li>
        </ul>
    </VisualExperience>;

export {createThriveTechnologies, createThriveDescription};


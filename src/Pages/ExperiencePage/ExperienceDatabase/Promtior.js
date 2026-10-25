import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const promtiorTechnologies =
    <ExperienceTechnologies>
        Python, React, Amazon Web Services (AWS), AWS Lambda, Amazon S3, Amazon DynamoDB, AWS Secrets Manager, Amazon Bedrock, Terraform, GitHub Actions, pytest, Serverless Architecture, Microservices, Software Architecture, Stakeholder Management
        <br/>
        <br/>
        December 2025 - April 2026
    </ExperienceTechnologies>

const promtiorDescription =
    <VisualExperience>
        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>40+ hrs→15min</div>
                <div className={classes.metricLabel}>Onboarding Time</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>500k</div>
                <div className={classes.metricLabel}>Rows per File</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>7+ Partners</div>
                <div className={classes.metricLabel}>Scalability Limit</div>
            </div>
        </div>

        <div className={classes.diagramSection}>
            <div className={classes.diagramTitle}>Over-simplified diagram of the architecture</div>
            <img 
                src="/static/images/promtior_diagram.png" 
                alt="Serverless data ingestion platform architecture diagram showing components and connectors" 
                className={classes.diagramImage}
            />
        </div>

        <ul className={classes.bulletList}>
            <li>
                Solo-built a self-service CSV ingestion platform and delivered it in two months, from architecture through production. I was the primary technical contact with the client. After that delivery, the client signed a permanent contract with Promtior.
            </li>
            <li>
                Five <strong>Lambda</strong> functions stream files from <strong>S3</strong>. Files are up to 500k rows and 100MB. <strong>Amazon Bedrock (Claude Opus 4.5)</strong> maps columns across different CSV layouts.
            </li>
            <li>
                Validation checks duplicates with a hash, required fields, and email format, tracks each row, and writes results to <strong>DynamoDB</strong> in batches.
            </li>
            <li>
                <strong>React</strong> SPA with a 3-step wizard, presigned-URL uploads, and processing status. Infrastructure is <strong>Terraform</strong>, <strong>GitHub Actions</strong>, and <strong>Secrets Manager</strong>; tests are <strong>pytest</strong> with AWS mocks (AAA), plus technical documentation. Client onboarding went from 40+ hours to 15 minutes, without an engineer in the loop, and past the previous 7-partner limit.
            </li>
        </ul>
    </VisualExperience>;

export {promtiorTechnologies, promtiorDescription};


import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const amoebaAITechnologies =
    <ExperienceTechnologies>
        Python, JavaScript, TypeScript, Amazon Web Services (AWS), AWS Lambda, Anthropic Claude, Machine Learning, Node.js, Serverless Framework, Amazon Dynamodb, Amazon SQS, Amazon CloudWatch, OpenAI, Software Architecture, Retrieval-Augmented Generation (RAG)
        <br/>
        <br/>
        April 2025 - August 2025 (5 months)
    </ExperienceTechnologies>

const amoebaAIDescription =
    <VisualExperience>
        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>40%</div>
                <div className={classes.metricLabel}>Faster customer AI chat</div>
            </div>
        </div>

        <div className={classes.diagramSection}>
            <div className={classes.diagramTitle}>Simplified architecture diagram</div>
            <img 
                src="/static/images/amoeba_diagram.png" 
                alt="Amoeba AI simplified architecture diagram showing high-level components and connectors" 
                className={classes.diagramImage}
            />
        </div>

        <ul className={classes.bulletList}>
            <li>
                Joined as one of the first software engineers. Built a <strong>Pipes and Filters</strong> pipeline on <strong>AWS Lambda</strong> that ingests and processes financial files on Amoeba&apos;s Pulse engine, for real-time ROI optimization in marketing and finance workflows.
            </li>
            <li>
                Built a production <strong>RAG</strong> chat (<strong>Claude</strong>, <strong>OpenAI</strong>) over proprietary financial datasets. It returns recommendations, business-hypothesis simulations, and next steps. I cut that customer-facing agent&apos;s response time by <strong>40%</strong>.
            </li>
            <li>
                Integrated those AI tools with the revenue workflows used for campaigns and customer lifecycle.
            </li>
        </ul>
    </VisualExperience>;

export {amoebaAITechnologies, amoebaAIDescription};


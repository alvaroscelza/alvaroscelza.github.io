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
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                As one of the inaugural Software Engineers at <strong>Amoeba AI</strong>—an AI-powered data science platform revolutionizing revenue growth for GTM teams—I spearheaded the development of core financial systems that processed complex multi-channel data to enhance forecasting accuracy and budgeting efficiency.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>40%</div>
                <div className={classes.metricLabel}>Latency Reduction</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Real-time</div>
                <div className={classes.metricLabel}>ROI Optimization</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>RAG</div>
                <div className={classes.metricLabel}>AI System Built</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>5</div>
                <div className={classes.metricLabel}>Months Impact</div>
            </div>
        </div>

        <div className={classes.diagramSection}>
            <div className={classes.diagramTitle}>Non-disclosure-friendly architecture diagram</div>
            <img 
                src="/static/images/amoeba_diagram.png" 
                alt="Amoeba AI simplified architecture diagram showing high-level components and connectors" 
                className={classes.diagramImage}
            />
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏗️</span>
                <span>Scalable Architecture</span>
            </div>
            <p className={classes.contributionDescription}>
                Architected a <strong>Pipes and Filters pattern</strong> integrated with <strong>AWS Lambda</strong> to automate financial file ingestion and processing. This architecture reduced latency by <strong>40%</strong> and enabled <strong>real-time ROI optimization</strong> for marketing and finance workflows, built on Amoeba's Pulse engine for continuous intelligence.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>AWS Lambda</span>
                <span className={classes.techTag}>Pipes & Filters</span>
                <span className={classes.techTag}>Serverless</span>
                <span className={classes.techTag}>Event-Driven</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤖</span>
                <span>AI-Powered RAG System</span>
            </div>
            <p className={classes.contributionDescription}>
                Engineered an early <strong>Retrieval-Augmented Generation (RAG)</strong> system, delivering a client-facing AI-driven conversational chat that queried proprietary financial datasets. The system provided personalized recommendations, business hypothesis simulations, and actionable next steps—empowering users without data science expertise to drive revenue growth.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>RAG</span>
                <span className={classes.techTag}>Anthropic Claude</span>
                <span className={classes.techTag}>OpenAI</span>
                <span className={classes.techTag}>Conversational AI</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📊</span>
                <span>Platform Integration & Intelligence</span>
            </div>
            <p className={classes.contributionDescription}>
                Collaborated cross-functionally to integrate AI tools with revenue management workflows, supporting Amoeba's mission to transform static dashboards into adaptive, goal-aligned intelligence. This integration enhanced campaign performance and customer lifecycle management, enabling data-driven decision-making across marketing and finance teams.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Platform Integration</span>
                <span className={classes.techTag}>Predictive Analytics</span>
                <span className={classes.techTag}>Workflow Automation</span>
                <span className={classes.techTag}>Data-Driven Insights</span>
            </div>
        </div>

        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                <strong>Impact:</strong> These initiatives directly contributed to client testimonials of improved decision-making and predictive insights, solidifying Amoeba's position as a leader in AI-native revenue operations.
            </p>
        </div>
    </VisualExperience>;

export {amoebaAITechnologies, amoebaAIDescription};


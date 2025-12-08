import ExperienceTechnologies from "../ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../ExperiencePageComponents/VisualExperience";
import classes from "../ExperiencePageComponents/VisualExperience.module.css";

const promptiorTechnologies =
    <ExperienceTechnologies>
        Python, React, Amazon Web Services (AWS), AWS Lambda, Amazon S3, Amazon DynamoDB, AWS Secrets Manager, Amazon Bedrock, Terraform, GitHub Actions, pytest, Serverless Architecture, Microservices, Software Architecture, Stakeholder Management
        <br/>
        <br/>
        December 2025 - Present
    </ExperienceTechnologies>

const promptiorDescription =
    <VisualExperience>
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                Designed and implemented a complete <strong>self-service data ingestion platform</strong> for processing large-volume CSV files (up to 500k rows, 100MB) with automatic validation and intelligent column analysis. Built a scalable serverless architecture with AI integration to enable seamless data processing workflows. <strong>Delivered the entire solution in just 2 months</strong>, from initial architecture design to production deployment.
            </p>
        </div>

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
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>2 Months</div>
                <div className={classes.metricLabel}>Development Time</div>
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

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🏗️</span>
                <span>Scalable Serverless Architecture</span>
            </div>
            <p className={classes.contributionDescription}>
                Architected a <strong>serverless microservices solution</strong> with <strong>5 AWS Lambda functions</strong> optimized for processing large files through <strong>S3 streaming</strong> to minimize memory usage. Implemented separation of concerns and event-driven patterns, enabling the system to handle massive data volumes efficiently while maintaining cost-effectiveness and scalability.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>AWS Lambda</span>
                <span className={classes.techTag}>Serverless</span>
                <span className={classes.techTag}>S3 Streaming</span>
                <span className={classes.techTag}>Microservices</span>
                <span className={classes.techTag}>Event-Driven</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤖</span>
                <span>AI-Powered Column Analysis</span>
            </div>
            <p className={classes.contributionDescription}>
                Integrated <strong>Amazon Bedrock (Claude Opus 4.5)</strong> for automatic column analysis and intelligent mapping between heterogeneous data structures. The AI system analyzes CSV files to understand column semantics, enabling automatic field mapping and reducing manual configuration errors. This innovation streamlined data ingestion workflows and improved accuracy for clients with varying data formats.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Amazon Bedrock</span>
                <span className={classes.techTag}>Claude Opus</span>
                <span className={classes.techTag}>AI Integration</span>
                <span className={classes.techTag}>Intelligent Mapping</span>
                <span className={classes.techTag}>Data Analysis</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>✅</span>
                <span>Robust Data Validation System</span>
            </div>
            <p className={classes.contributionDescription}>
                Implemented a comprehensive validation pipeline with <strong>duplicate detection using hashing algorithms</strong>, required field validation, and email format verification. The system processes data row-by-row with real-time tracking, storing results in <strong>DynamoDB using batch operations</strong> for optimal performance. This ensured data quality and integrity throughout the ingestion process.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Data Validation</span>
                <span className={classes.techTag}>Duplicate Detection</span>
                <span className={classes.techTag}>DynamoDB</span>
                <span className={classes.techTag}>Batch Operations</span>
                <span className={classes.techTag}>Real-time Processing</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>⚛️</span>
                <span>React Frontend with Guided Experience</span>
            </div>
            <p className={classes.contributionDescription}>
                Developed a <strong>React SPA</strong> with a <strong>3-step wizard interface</strong> providing a guided user experience for file upload and processing. Implemented modular components, real-time processing status visualization, and secure file uploads using <strong>presigned URLs</strong>. The frontend seamlessly integrates with serverless APIs, handling CORS and authentication for a smooth end-to-end workflow.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>React</span>
                <span className={classes.techTag}>SPA</span>
                <span className={classes.techTag}>Wizard UI</span>
                <span className={classes.techTag}>Presigned URLs</span>
                <span className={classes.techTag}>Real-time Status</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔧</span>
                <span>DevOps & Infrastructure as Code</span>
            </div>
            <p className={classes.contributionDescription}>
                Configured complete infrastructure using <strong>Terraform</strong> for Infrastructure as Code, implemented <strong>CI/CD pipelines with GitHub Actions</strong>, and managed secrets securely through <strong>AWS Secrets Manager</strong>. Established comprehensive <strong>unit testing with pytest</strong> using AWS service mocks, following AAA pattern, and created extensive technical documentation to facilitate maintenance and scalability.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Terraform</span>
                <span className={classes.techTag}>GitHub Actions</span>
                <span className={classes.techTag}>CI/CD</span>
                <span className={classes.techTag}>AWS Secrets Manager</span>
                <span className={classes.techTag}>pytest</span>
                <span className={classes.techTag}>Infrastructure as Code</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🚀</span>
                <span>Client Onboarding Transformation</span>
            </div>
            <p className={classes.contributionDescription}>
                Transformed the client onboarding process by reducing setup time from <strong>40+ hours to 15 minutes</strong>, eliminating the need for engineering team intervention. The self-service platform enabled clients to onboard independently, <strong>reducing operational costs</strong> and breaking the previous <strong>7-partner limit</strong>, allowing the business to scale beyond previous constraints. This automation freed engineering resources while improving client satisfaction through faster time-to-value.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Process Automation</span>
                <span className={classes.techTag}>Self-Service Platform</span>
                <span className={classes.techTag}>Cost Reduction</span>
                <span className={classes.techTag}>Scalability</span>
                <span className={classes.techTag}>Business Impact</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🤝</span>
                <span>Stakeholder Management & Direct Client Engagement</span>
            </div>
            <p className={classes.contributionDescription}>
                Managed direct client relationships, providing regular updates, gathering requirements, and ensuring alignment between technical implementation and business needs. Acted as the primary technical point of contact, translating client needs into technical specifications and delivering solutions that met both functional and business objectives.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Stakeholder Management</span>
                <span className={classes.techTag}>Client Relations</span>
                <span className={classes.techTag}>Requirements Gathering</span>
                <span className={classes.techTag}>Technical Communication</span>
            </div>
        </div>

        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                <strong>Impact:</strong> Delivered a production-ready, scalable data ingestion platform that processes enterprise-level CSV files with AI-powered intelligence, robust validation, and an intuitive user experience. The solution enables clients to efficiently ingest and validate large datasets while maintaining data quality and reducing manual configuration overhead.
            </p>
        </div>
    </VisualExperience>;

export {promptiorTechnologies, promptiorDescription};


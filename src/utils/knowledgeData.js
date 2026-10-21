// Structure: [technology, seniority, category]
// Grouped by category. Within each category, order is Expert, then Advanced,
// then Proficient, then Beginner. Keep the existing relative order when several
// skills share a seniority. The page renders this array in order, so keep this
// rule when editing.

export const knowledgeData = [
    // Programming Languages
    ['Python', 'Advanced', 'Programming Languages'],
    ['C#', 'Proficient', 'Programming Languages'],
    ['Java', 'Proficient', 'Programming Languages'],
    ['JavaScript (JS)', 'Proficient', 'Programming Languages'],
    ['TypeScript (TS)', 'Proficient', 'Programming Languages'],
    ['Ruby', 'Beginner', 'Programming Languages'],
    ['C++', 'Beginner', 'Programming Languages'],
    ['Haskell', 'Beginner', 'Programming Languages'],
    ['PHP', 'Beginner', 'Programming Languages'],
    ['Scilab', 'Beginner', 'Programming Languages'],
    ['Markdown', 'Beginner', 'Programming Languages'],
    ['Sigma', 'Beginner', 'Programming Languages'],
    ['BNFC', 'Beginner', 'Programming Languages'],

    // Backend Frameworks
    ['Django', 'Expert', 'Backend Frameworks'],
    ['Django REST Framework (DRF)', 'Advanced', 'Backend Frameworks'],
    ['.NET', 'Proficient', 'Backend Frameworks'],
    ['ASP.NET', 'Proficient', 'Backend Frameworks'],
    ['Wagtail', 'Proficient', 'Backend Frameworks'],
    ['Odoo', 'Proficient', 'Backend Frameworks'],
    ['Flask', 'Proficient', 'Backend Frameworks'],
    ['Node.js', 'Proficient', 'Backend Frameworks'],
    ['Express.js', 'Proficient', 'Backend Frameworks'],
    ['Ruby on Rails (RoR)', 'Beginner', 'Backend Frameworks'],
    ['Pelican', 'Beginner', 'Backend Frameworks'],
    ['Java Enterprise Edition (Java EE)', 'Beginner', 'Backend Frameworks'],
    ['Sails.js', 'Beginner', 'Backend Frameworks'],
    ['Nightmare.js', 'Beginner', 'Backend Frameworks'],
    ['Celery', 'Beginner', 'Backend Frameworks'],
    ['Smarty', 'Beginner', 'Backend Frameworks'],
    ['Flower', 'Beginner', 'Backend Frameworks'],
    ['uWSGI', 'Beginner', 'Backend Frameworks'],

    // Frontend & Desktop
    ['React', 'Proficient', 'Frontend & Desktop'],
    ['HTML', 'Proficient', 'Frontend & Desktop'],
    ['CSS', 'Proficient', 'Frontend & Desktop'],
    ['Electron', 'Beginner', 'Frontend & Desktop'],
    ['Vue.js', 'Beginner', 'Frontend & Desktop'],
    ['Game Development (Unity)', 'Beginner', 'Frontend & Desktop'],
    ['jQuery', 'Beginner', 'Frontend & Desktop'],

    // Software Architecture & Design
    ['Representational State Transfer (REST)', 'Expert', 'Software Architecture & Design'],
    ['Software Design Patterns', 'Expert', 'Software Architecture & Design'],
    ['API Design', 'Expert', 'Software Architecture & Design'],
    ['Cloud Native Architecture', 'Advanced', 'Software Architecture & Design'],
    ['Integration Architecture', 'Advanced', 'Software Architecture & Design'],
    ['Security Architecture', 'Advanced', 'Software Architecture & Design'],
    ['Software Architecture', 'Advanced', 'Software Architecture & Design'],
    ['Microservices', 'Advanced', 'Software Architecture & Design'],
    ['Application Transformation (migrations)', 'Advanced', 'Software Architecture & Design'],
    ['Enterprise System Integration', 'Advanced', 'Software Architecture & Design'],
    ['Solution Architecture', 'Advanced', 'Software Architecture & Design'],
    ['Simple Object Access Protocol (SOAP)', 'Beginner', 'Software Architecture & Design'],

    // Generative AI & LLMs
    ['Anthropic Claude', 'Advanced', 'Generative AI & LLMs'],
    ['Retrieval-Augmented Generation (RAG)', 'Advanced', 'Generative AI & LLMs'],
    ['Context Engineering', 'Advanced', 'Generative AI & LLMs'],
    ['Structured Output & Tool Calling', 'Advanced', 'Generative AI & LLMs'],
    ['AI Solution Architecture', 'Advanced', 'Generative AI & LLMs'],
    ['AI-Powered Data Extraction', 'Advanced', 'Generative AI & LLMs'],
    ['Model Selection & Trade-offs', 'Advanced', 'Generative AI & LLMs'],
    ['OpenAI', 'Proficient', 'Generative AI & LLMs'],
    ['ChatGPT', 'Proficient', 'Generative AI & LLMs'],
    ['Agentic AI', 'Proficient', 'Generative AI & LLMs'],
    ['Prompt Engineering', 'Proficient', 'Generative AI & LLMs'],
    ['Model Context Protocol (MCP)', 'Proficient', 'Generative AI & LLMs'],
    ['LLMOps & Model Deployment', 'Proficient', 'Generative AI & LLMs'],
    ['Rule-based AI', 'Beginner', 'Generative AI & LLMs'],
    ['RASA', 'Beginner', 'Generative AI & LLMs'],

    // Machine Learning & Data Science
    ['Count Vectorizer', 'Advanced', 'Machine Learning & Data Science'],
    ['TF-IDF', 'Advanced', 'Machine Learning & Data Science'],
    ['Feature Engineering', 'Advanced', 'Machine Learning & Data Science'],
    ['Regression & Classification', 'Advanced', 'Machine Learning & Data Science'],
    ['Insight Generation', 'Advanced', 'Machine Learning & Data Science'],
    ['Linear Regression', 'Proficient', 'Machine Learning & Data Science'],
    ['Naive Bayes', 'Proficient', 'Machine Learning & Data Science'],
    ['Logistic Regression', 'Proficient', 'Machine Learning & Data Science'],
    ['Confusion Matrix', 'Proficient', 'Machine Learning & Data Science'],
    ['Classification Report', 'Proficient', 'Machine Learning & Data Science'],
    ['Sentiment Analysis', 'Proficient', 'Machine Learning & Data Science'],
    ['Word Embeddings', 'Proficient', 'Machine Learning & Data Science'],
    ['Decision Trees', 'Proficient', 'Machine Learning & Data Science'],
    ['Random Forest', 'Proficient', 'Machine Learning & Data Science'],
    ['XGBoost', 'Proficient', 'Machine Learning & Data Science'],
    ['Pricing Optimization', 'Proficient', 'Machine Learning & Data Science'],
    ['Neural Networks', 'Beginner', 'Machine Learning & Data Science'],
    ['Bidirectional Long Short-Term Memory', 'Beginner', 'Machine Learning & Data Science'],
    ['PyTorch', 'Beginner', 'Machine Learning & Data Science'],
    ['Transformers', 'Beginner', 'Machine Learning & Data Science'],
    ['Compute Unified Device Architecture (CUDA)', 'Beginner', 'Machine Learning & Data Science'],
    ['Google Colab', 'Beginner', 'Machine Learning & Data Science'],
    ['Kaggle', 'Beginner', 'Machine Learning & Data Science'],

    // Data Engineering
    ['ER Modeling', 'Expert', 'Data Engineering'],
    ['ETL', 'Advanced', 'Data Engineering'],
    ['Batch Processing', 'Advanced', 'Data Engineering'],
    ['Serverless Data Processing', 'Advanced', 'Data Engineering'],
    ['Data Cleansing', 'Advanced', 'Data Engineering'],
    ['Data Quality Checks', 'Advanced', 'Data Engineering'],
    ['Database Design', 'Advanced', 'Data Engineering'],
    ['Schema Design', 'Advanced', 'Data Engineering'],
    ['Cloud Data Architecture', 'Advanced', 'Data Engineering'],
    ['dbt', 'Proficient', 'Data Engineering'],
    ['Snowflake', 'Proficient', 'Data Engineering'],
    ['Data Warehouse & Lakehouse Design', 'Proficient', 'Data Engineering'],
    ['Data Lineage', 'Proficient', 'Data Engineering'],
    ['Data Mesh', 'Proficient', 'Data Engineering'],
    ['Reporting & Visualization', 'Proficient', 'Data Engineering'],

    // Database Engines and Managers
    ['PostgreSQL', 'Advanced', 'Database Engines and Managers'],
    ['DBeaver', 'Advanced', 'Database Engines and Managers'],
    ['SQLite', 'Advanced', 'Database Engines and Managers'],
    ['pgAdmin', 'Proficient', 'Database Engines and Managers'],
    ['Microsoft SQL Server', 'Proficient', 'Database Engines and Managers'],
    ['SQL Server Management Studio', 'Proficient', 'Database Engines and Managers'],
    ['MongoDB', 'Proficient', 'Database Engines and Managers'],
    ['Mongoose', 'Proficient', 'Database Engines and Managers'],
    ['MongoDB Compass', 'Proficient', 'Database Engines and Managers'],
    ['Supabase', 'Proficient', 'Database Engines and Managers'],
    ['Oracle SQL', 'Beginner', 'Database Engines and Managers'],
    ['MySQL', 'Beginner', 'Database Engines and Managers'],
    ['phpMyAdmin', 'Beginner', 'Database Engines and Managers'],
    ['Mongo Atlas Search', 'Beginner', 'Database Engines and Managers'],
    ['Redis', 'Beginner', 'Database Engines and Managers'],

    // Cloud
    ['Amazon Web Services (AWS)', 'Advanced', 'Cloud'],
    ['Amazon Elastic Compute Cloud (EC2)', 'Advanced', 'Cloud'],
    ['Amazon Simple Storage Service (S3)', 'Advanced', 'Cloud'],
    ['AWS Lambda', 'Advanced', 'Cloud'],
    ['AWS Secrets Manager', 'Advanced', 'Cloud'],
    ['Amazon DynamoDB (DynamoDB)', 'Advanced', 'Cloud'],
    ['Serverless', 'Advanced', 'Cloud'],
    ['Microsoft Azure', 'Proficient', 'Cloud'],
    ['App Service', 'Proficient', 'Cloud'],
    ['Azure Database for PostgreSQL', 'Proficient', 'Cloud'],
    ['Elastic Beanstalk', 'Proficient', 'Cloud'],
    ['Function App', 'Proficient', 'Cloud'],
    ['AWS Identity and Access Management (IAM)', 'Proficient', 'Cloud'],
    ['Amazon CloudWatch (CloudWatch)', 'Proficient', 'Cloud'],
    ['Serverless Offline', 'Proficient', 'Cloud'],
    ['GitHub Pages', 'Proficient', 'Cloud'],
    ['Amazon API Gateway (API Gateway)', 'Proficient', 'Cloud'],
    ['Amazon Simple Queue Service (SQS)', 'Proficient', 'Cloud'],
    ['Amazon Bedrock', 'Proficient', 'Cloud'],
    ['Cost Optimization', 'Proficient', 'Cloud'],
    ['Disaster Recovery', 'Proficient', 'Cloud'],
    ['Google Cloud', 'Beginner', 'Cloud'],
    ['Compute Engine', 'Beginner', 'Cloud'],
    ['App Engine', 'Beginner', 'Cloud'],
    ['AWS CodeDeploy', 'Beginner', 'Cloud'],
    ['AWS CodePipeline', 'Beginner', 'Cloud'],
    ['Heroku', 'Beginner', 'Cloud'],

    // DevOps & CI/CD
    ['Git', 'Expert', 'DevOps & CI/CD'],
    ['Release Engineering', 'Expert', 'DevOps & CI/CD'],
    ['Github Actions', 'Advanced', 'DevOps & CI/CD'],
    ['Terraform', 'Advanced', 'DevOps & CI/CD'],
    ['Github', 'Advanced', 'DevOps & CI/CD'],
    ['Infrastructure as Code', 'Advanced', 'DevOps & CI/CD'],
    ['CI/CD', 'Advanced', 'DevOps & CI/CD'],
    ['Gitlab', 'Proficient', 'DevOps & CI/CD'],
    ['SourceTree', 'Proficient', 'DevOps & CI/CD'],
    ['Apache Subversion (SVN)', 'Proficient', 'DevOps & CI/CD'],
    ['Monitoring & Logging', 'Proficient', 'DevOps & CI/CD'],
    ['Docker + Docker-Compose', 'Proficient', 'DevOps & CI/CD'],
    ['CircleCI', 'Beginner', 'DevOps & CI/CD'],
    ['Bitbucket', 'Beginner', 'DevOps & CI/CD'],
    ['Team Foundation Version Control', 'Beginner', 'DevOps & CI/CD'],
    ['DataDog', 'Beginner', 'DevOps & CI/CD'],
    ['Citrix', 'Beginner', 'DevOps & CI/CD'],
    ['VirtualBox', 'Beginner', 'DevOps & CI/CD'],
    ['Microsoft Internet Information Services (IIS)', 'Beginner', 'DevOps & CI/CD'],

    // Testing & QA
    ['Postman', 'Advanced', 'Testing & QA'],
    ['pytest', 'Proficient', 'Testing & QA'],
    ['SoapUI', 'Beginner', 'Testing & QA'],
    ['Selenium', 'Beginner', 'Testing & QA'],
    ['Mocha', 'Beginner', 'Testing & QA'],
    ['Chai', 'Beginner', 'Testing & QA'],
    ['Fakingoose', 'Beginner', 'Testing & QA'],

    // Project Management
    ['Requirements & Documentation', 'Expert', 'Project Management'],
    ['Scrum', 'Advanced', 'Project Management'],
    ['Agile Development', 'Advanced', 'Project Management'],
    ['Trello', 'Advanced', 'Project Management'],
    ['Jira', 'Advanced', 'Project Management'],
    ['Custom Methodologies', 'Proficient', 'Project Management'],
    ['SDLC: Iterative & Incremental', 'Proficient', 'Project Management'],
    ['SDLC: Waterfall / Traditional', 'Proficient', 'Project Management'],
    ['Design Thinking', 'Proficient', 'Project Management'],
    ['Lean Startup', 'Beginner', 'Project Management'],
    ['Redmine', 'Beginner', 'Project Management'],
    ['Pivotal', 'Beginner', 'Project Management'],

    // Leadership & Soft Skills
    ['Team Leadership', 'Proficient', 'Leadership & Soft Skills'],
    ['Stakeholder Management', 'Proficient', 'Leadership & Soft Skills'],
    ['Teaching', 'Proficient', 'Leadership & Soft Skills'],
    ['Negotiation', 'Beginner', 'Leadership & Soft Skills'],

    // IDEs & Editors
    ['Cursor', 'Expert', 'IDEs & Editors'],
    ['PyCharm', 'Advanced', 'IDEs & Editors'],
    ['Visual Studio', 'Advanced', 'IDEs & Editors'],
    ['Netbeans', 'Proficient', 'IDEs & Editors'],
    ['Notepad++', 'Proficient', 'IDEs & Editors'],
    ['Sublime Text', 'Proficient', 'IDEs & Editors'],
    ['RubyMine', 'Proficient', 'IDEs & Editors'],
    ['Visual Studio Code (VSCode)', 'Proficient', 'IDEs & Editors'],
    ['Ona (formerly Gitpod)', 'Beginner', 'IDEs & Editors'],
    ['Fleet', 'Beginner', 'IDEs & Editors'],
    ['WebStorm', 'Beginner', 'IDEs & Editors'],
    ['Android Studio', 'Beginner', 'IDEs & Editors'],
    ['DataSpell', 'Beginner', 'IDEs & Editors'],

    // Operating Systems
    ['Windows', 'Advanced', 'Operating Systems'],
    ['Linux', 'Proficient', 'Operating Systems'],
    ['Mac', 'Proficient', 'Operating Systems'],
];

export const getAllSkillsData = () => {
    const skillLevelMap = {};

    knowledgeData.forEach(([technology, level]) => {
        if (technology && !skillLevelMap[technology]) {
            skillLevelMap[technology] = level;
        }
    });

    return skillLevelMap;
};

export const seniorityDescriptions = {
    'Beginner': "I know the theory and have applied it in courses, personal projects or small tasks. As a fast self-learner (especially with today's AI tools), I can quickly ramp up to deliver with it in production.",
    'Proficient': "I've used it in real projects and can deliver with it independently, following established best practices.",
    'Advanced': "I've designed or led production solutions with it, handle non-trivial cases and trade-offs, and can guide others.",
    'Expert': "I'm a go-to reference: I define standards and approaches with it, have developed my own techniques, and teach it to others."
};

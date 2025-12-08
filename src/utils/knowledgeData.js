export const normalizeSeniority = (seniority) => {
    if (seniority === 'Semi Senior') return 'Semi-Senior';
    if (seniority === 'Mid Level') return 'Mid-Level';
    return seniority;
};

// Structure: [technology, seniority, category]
// Ordered by seniority within each category: Senior → Semi-Senior → Mid-Level → Junior
export const knowledgeData = [
    // Favorites
    ['Python', 'Senior', 'Programming Languages and Frameworks'],
    ['Django', 'Senior', 'Programming Languages and Frameworks'],
    ['PostgreSQL', 'Senior', 'Database Engines and Managers'],
    ['Amazon Web Services (AWS)', 'Senior', 'Cloud'],
    ['Github Actions', 'Senior', 'Versioning and CI/CD'],
    ['Terraform', 'Semi Senior', 'Versioning and CI/CD'],
    ['Machine Learning', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Scrum', 'Senior', 'Project Management'],
    ['Team Leadership', 'Semi Senior', 'Project Management'],
    ['Representational State Transfer (REST)', 'Senior', 'Miscellaneous'],
    
    // Programming Languages and Frameworks
    ['Django REST Framework (DRF)', 'Senior', 'Programming Languages and Frameworks'],
    ['C#', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['.NET', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['ASP.NET', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Wagtail', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Odoo', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Flask', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Java', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['JavaScript (JS)', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Node.js', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['Express.js', 'Semi Senior', 'Programming Languages and Frameworks'],
    ['TypeScript (TS)', 'Mid Level', 'Programming Languages and Frameworks'],
    ['React', 'Mid Level', 'Programming Languages and Frameworks'],
    ['HTML', 'Mid Level', 'Programming Languages and Frameworks'],
    ['CSS', 'Mid Level', 'Programming Languages and Frameworks'],
    ['Ruby', 'Mid Level', 'Programming Languages and Frameworks'],
    ['Ruby on Rails (RoR)', 'Mid Level', 'Programming Languages and Frameworks'],
    ['Pelican', 'Junior', 'Programming Languages and Frameworks'],
    ['Unity', 'Junior', 'Programming Languages and Frameworks'],
    ['Java Enterprise Edition (Java EE)', 'Junior', 'Programming Languages and Frameworks'],
    ['Android Studio', 'Junior', 'Programming Languages and Frameworks'],
    ['Sails.js', 'Junior', 'Programming Languages and Frameworks'],
    ['Electron', 'Junior', 'Programming Languages and Frameworks'],
    ['Nightmare.js', 'Junior', 'Programming Languages and Frameworks'],
    ['C++', 'Junior', 'Programming Languages and Frameworks'],
    ['Haskell', 'Junior', 'Programming Languages and Frameworks'],
    ['PHP', 'Junior', 'Programming Languages and Frameworks'],
    ['Scilab', 'Junior', 'Programming Languages and Frameworks'],
    ['Vue.js', 'Junior', 'Programming Languages and Frameworks'],
    
    // Artificial Intelligence (AI)
    ['Linear Regression', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Naive Bayes', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Neural Networks', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Bidirectional Long Short-Term Memory', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Rule-based AI', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['RASA', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Count Vectorizer', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Logistic Regression', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Confusion Matrix', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Classification Report', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['PyTorch', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Transformers', 'Mid Level', 'Artificial Intelligence (AI)'],
    ['Compute Unified Device Architecture (CUDA)', 'Mid Level', 'Artificial Intelligence (AI)'],
    
    // Database Engines and Managers
    ['DBeaver', 'Senior', 'Database Engines and Managers'],
    ['SQLite', 'Senior', 'Database Engines and Managers'],
    ['pgAdmin', 'Semi Senior', 'Database Engines and Managers'],
    ['Microsoft SQL Server', 'Semi Senior', 'Database Engines and Managers'],
    ['SQL Server Management Studio', 'Semi Senior', 'Database Engines and Managers'],
    ['MongoDB', 'Semi Senior', 'Database Engines and Managers'],
    ['Mongoose', 'Semi Senior', 'Database Engines and Managers'],
    ['MongoDB Compass', 'Semi Senior', 'Database Engines and Managers'],
    ['Oracle SQL', 'Mid Level', 'Database Engines and Managers'],
    ['MySQL', 'Mid Level', 'Database Engines and Managers'],
    ['phpMyAdmin', 'Mid Level', 'Database Engines and Managers'],
    ['Mongo Atlas Search', 'Junior', 'Database Engines and Managers'],
    ['Redis', 'Junior', 'Database Engines and Managers'],
    
    // Versioning and CI/CD
    ['Git', 'Senior', 'Versioning and CI/CD'],
    ['Github', 'Senior', 'Versioning and CI/CD'],
    ['Gitlab', 'Semi Senior', 'Versioning and CI/CD'],
    ['SourceTree', 'Semi Senior', 'Versioning and CI/CD'],
    ['Apache Subversion (SVN)', 'Semi Senior', 'Versioning and CI/CD'],
    ['CircleCI', 'Mid Level', 'Versioning and CI/CD'],
    ['Bitbucket', 'Mid Level', 'Versioning and CI/CD'],
    ['Team Foundation Version Control', 'Mid Level', 'Versioning and CI/CD'],
    
    // Cloud
    ['Microsoft Azure', 'Senior', 'Cloud'],
    ['App Service', 'Senior', 'Cloud'],
    ['Azure Database for PostgreSQL', 'Senior', 'Cloud'],
    ['Elastic Beanstalk', 'Senior', 'Cloud'],
    ['Secrets Manager', 'Senior', 'Cloud'],
    ['Amazon Elastic Compute Cloud (EC2)', 'Senior', 'Cloud'],
    ['Amazon Simple Storage Service (S3)', 'Senior', 'Cloud'],
    ['AWS Lambda', 'Senior', 'Cloud'],
    ['AWS Secrets Manager', 'Senior', 'Cloud'],
    ['Function App', 'Semi Senior', 'Cloud'],
    ['AWS Identity and Access Management (IAM)', 'Semi Senior', 'Cloud'],
    ['Amazon CloudWatch (CloudWatch)', 'Semi Senior', 'Cloud'],
    ['Amazon DynamoDB (DynamoDB)', 'Semi Senior', 'Cloud'],
    ['Serverless', 'Semi Senior', 'Cloud'],
    ['Serverless Offline', 'Semi Senior', 'Cloud'],
    ['GitHub Pages', 'Semi Senior', 'Cloud'],
    ['Amazon API Gateway (API Gateway)', 'Mid Level', 'Cloud'],
    ['Amazon Simple Queue Service (SQS)', 'Mid Level', 'Cloud'],
    ['Amazon Bedrock', 'Mid Level', 'Cloud'],
    ['Google Cloud', 'Mid Level', 'Cloud'],
    ['Compute Engine', 'Mid Level', 'Cloud'],
    ['App Engine', 'Mid Level', 'Cloud'],
    ['AWS CodeDeploy', 'Junior', 'Cloud'],
    ['AWS CodePipeline', 'Junior', 'Cloud'],
    ['Heroku', 'Junior', 'Cloud'],
    ['DataDog', 'Junior', 'Cloud'],
    
    // Project Management
    ['Agile Development', 'Senior', 'Project Management'],
    ['Custom Methodologies', 'Semi Senior', 'Project Management'],
    ['Software Development Life Cycle (SDLC) Iterative Incremental', 'Semi Senior', 'Project Management'],
    ['Software Development Life Cycle (SDLC) Incremental', 'Semi Senior', 'Project Management'],
    ['Traditional Development', 'Semi Senior', 'Project Management'],
    ['Software Development Life Cycle (SDLC) Waterfall', 'Semi Senior', 'Project Management'],
    ['Design Thinking', 'Semi Senior', 'Project Management'],
    ['Lean Startup', 'Mid Level', 'Project Management'],
    ['Software Development Life Cycle (SDLC) Evolutionary', 'Mid Level', 'Project Management'],
    ['Negotiation', 'Mid Level', 'Project Management'],
    
    // Operative Systems
    ['Windows', 'Senior', 'Operative Systems'],
    ['Linux', 'Semi Senior', 'Operative Systems'],
    ['Mac', 'Semi Senior', 'Operative Systems'],
    ['Ubuntu', 'Mid Level', 'Operative Systems'],
    ['Mint', 'Mid Level', 'Operative Systems'],
    ['Debian', 'Junior', 'Operative Systems'],
    
    // IDEs
    ['PyCharm', 'Senior', 'IDEs'],
    ['Visual Studio', 'Senior', 'IDEs'],
    ['Netbeans', 'Semi Senior', 'IDEs'],
    ['Notepad++', 'Semi Senior', 'IDEs'],
    ['Sublime Text', 'Semi Senior', 'IDEs'],
    ['RubyMine', 'Semi Senior', 'IDEs'],
    ['Fleet', 'Mid Level', 'IDEs'],
    ['Visual Studio Code (VSCode)', 'Mid Level', 'IDEs'],
    ['WebStorm', 'Mid Level', 'IDEs'],
    ['Unity', 'Junior', 'IDEs'],
    ['Android Studio', 'Junior', 'IDEs'],
    
    // Management Tools
    ['Trello', 'Senior', 'Management Tools'],
    ['Jira', 'Senior', 'Management Tools'],
    ['Redmine', 'Mid Level', 'Management Tools'],
    ['Pivotal', 'Mid Level', 'Management Tools'],
    
    // Miscellaneous
    ['Postman', 'Senior', 'Miscellaneous'],
    ['Docker + Docker-Compose', 'Semi Senior', 'Miscellaneous'],
    ['Celery', 'Mid Level', 'Miscellaneous'],
    ['VirtualBox', 'Mid Level', 'Miscellaneous'],
    ['Microsoft Internet Information Services (IIS)', 'Mid Level', 'Miscellaneous'],
    ['jQuery', 'Mid Level', 'Miscellaneous'],
    ['Markdown', 'Mid Level', 'Miscellaneous'],
    ['Smarty', 'Mid Level', 'Miscellaneous'],
    ['BNFC', 'Junior', 'Miscellaneous'],
    ['Desarrollo de Videojuegos', 'Junior', 'Miscellaneous'],
    ['Simple Object Access Protocol (SOAP)', 'Junior', 'Miscellaneous'],
    ['SoapUI', 'Junior', 'Miscellaneous'],
    ['Selenium', 'Junior', 'Miscellaneous'],
    ['Flower', 'Junior', 'Miscellaneous'],
    ['uWSGI', 'Junior', 'Miscellaneous'],
    ['Mocha', 'Junior', 'Miscellaneous'],
    ['Chai', 'Junior', 'Miscellaneous'],
    ['Fakingoose', 'Junior', 'Miscellaneous']
];

export const getAllSkillsData = () => {
    const skillSeniorityMap = {};

    knowledgeData.forEach(([technology, seniority]) => {
        const normalizedSeniority = normalizeSeniority(seniority);
        if (technology && !skillSeniorityMap[technology]) {
            skillSeniorityMap[technology] = normalizedSeniority;
        }
    });

    return skillSeniorityMap;
};

export const seniorityDescriptions = {
    'Senior': 'Highly experienced and immediately productive with these technologies. I\'m well-versed in their latest best practices, methodologies, and have developed personal techniques I can share. Comfortable starting on any project, regardless of size or technical debt.',
    'Semi-Senior': 'Considerably experienced, comfortable, and familiar with its best practices and patterns. I may need a few days to refresh or master them if I haven\'t used them recently.',
    'Mid-Level': 'Used these technologies in personal projects or courses. I can apply general software engineering knowledge but need a few weeks of focused work to reach semi-senior level.',
    'Junior': 'Limited experience (1-2 months) with these techs, mainly for small tasks or projects. I can build simple software but need more practice to handle larger projects, potentially reaching mid-level in a few weeks with regular use.'
};

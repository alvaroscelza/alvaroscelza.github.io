import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 10,
        lineHeight: 1.5,
    },
    coverPage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: 100,
    },
    name: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2c3e50',
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        color: '#7f8c8d',
        marginBottom: 30,
        textAlign: 'center',
    },
    contactInfo: {
        fontSize: 11,
        color: '#34495e',
        marginTop: 20,
        textAlign: 'center',
        lineHeight: 1.8,
    },
    section: {
        marginBottom: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 12,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#3498db',
        borderBottomStyle: 'solid',
    },
    companyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 15,
    },
    companyName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    experienceTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#34495e',
        marginTop: 8,
        marginBottom: 4,
    },
    experienceDate: {
        fontSize: 9,
        color: '#7f8c8d',
        fontStyle: 'italic',
        marginBottom: 4,
    },
    experienceDescription: {
        fontSize: 9,
        color: '#2c3e50',
        marginBottom: 8,
        textAlign: 'justify',
    },
    technologies: {
        fontSize: 9,
        color: '#7f8c8d',
        fontStyle: 'italic',
        marginBottom: 8,
    },
    skillsCategory: {
        marginBottom: 15,
    },
    skillsCategoryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    skillItem: {
        fontSize: 9,
        color: '#34495e',
        marginBottom: 4,
        paddingLeft: 10,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1',
        borderBottomStyle: 'solid',
        marginTop: 15,
        marginBottom: 15,
    },
});

const PDFCV = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.coverPage}>
                    <Text style={styles.name}>Alvaro Scelza</Text>
                    <Text style={styles.title}>Software Engineer</Text>
                    <View style={styles.contactInfo}>
                        <Text>alvaroscelza@gmail.com</Text>
                        <Text>https://alvaroscelza.github.io/</Text>
                        <Text>https://www.linkedin.com/in/ing-alvaro-scelza/</Text>
                        <Text>https://github.com/alvaroscelza</Text>
                    </View>
                    <View style={{ marginTop: 40, fontSize: 9, color: '#95a5a6' }}>
                        <Text>Generated on {currentDate}</Text>
                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Summary</Text>
                    <Text style={styles.experienceDescription}>
                        Software Engineer specialized in Backend with Python. In the industry since 2012, with extensive experience in Python, Django, and Flask since 2018, PostgreSQL since 2018, and Cloud services (Azure, AWS, GCloud, Heroku) since 2020. JavaScript with focus on React since 2022, and Machine Learning since 2024. Also manage projects and lead development teams. Enthusiast of agile methodologies like Scrum, Lean Startup, Design Thinking, and Continuous Improvement. Uruguayan and Italian passports, open to relocation. Fluent in Spanish and English.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    
                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>SkollARS Software Development - Personal Projects</Text>
                    </View>
                    <Text style={styles.experienceDate}>September 2025 - Present (3 months)</Text>
                    <Text style={styles.experienceDescription}>
                        I've taken the leap to pursue my entrepreneurial journey, dedicating myself to personal projects I've envisioned for years but never had the time to explore. Fueled by passion more than profit, I'm using my personal savings to bring these ideas to life.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Django, React.js, AWS, Azure, GCloud, PostgreSQL, Git, DevOps
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>Amoeba AI - Software Engineer</Text>
                    </View>
                    <Text style={styles.experienceDate}>April 2025 - August 2025 (5 months)</Text>
                    <Text style={styles.experienceDescription}>
                        As one of the first Software Engineers at Amoeba AI, I played a key role in developing and maintaining our innovative financial system. Utilized AWS Lambdas and a Pipes and Filters architecture to streamline the processing of financial files. Built a rustic Retrieval-Augmented Generation (RAG) that provided our clients with an AI-Driven chat specialized in their company's financial information.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, JavaScript, TypeScript, AWS Lambda, Anthropic Claude, Machine Learning, Node.js, Serverless Framework, Dynamodb, SQS, CloudWatch, OpenAI, RAG
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>Elastic Hotel - FullStack Software Engineer</Text>
                    </View>
                    <Text style={styles.experienceDate}>March 2023 - April 2025 (2 years 2 months)</Text>
                    <Text style={styles.experienceDescription}>
                        I suggested migrating from Flask to Django since it's a more suitable tech stack for a monolithic application. Along with DRF it is also full equipped for complex and scalable APIs. This allowed us to split our frontend and backend in a Django-React architecture. We also implemented a new CI/CD pipeline with Terraform and AWS. In mid-2023, I pursued AI/ML, enhancing user reviews with a model that predicts ratings with 86% accuracy.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Django, Flask, Machine Learning, DevOps, Git, GitHub, JavaScript, AWS, PostgreSQL, Terraform, Azure, Jira, DataSpell, Google Collab, Kaggle, OpenAI, Pandas, NumPy, Scikit-Learn
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>CreateThrive - Fullstack Engineer (Staff Augmentation)</Text>
                    </View>
                    <Text style={styles.experienceDate}>January 2022 - February 2023 (1 year 2 months)</Text>
                    <Text style={styles.experienceDescription}>
                        Served as Staff Augmentation Engineer, delivering continuous fullstack development and DevOps support across CreateThrive's high-value clients in the Fintech, Web3, and Energy sectors. Focused on technical debt reduction, maintenance, and feature development for clients including Sunpower's InstantDesign, Kard payments platform, Convex Web3 security solution, and No Nerds No Problem.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Django, Flask, JavaScript, TypeScript, Node.js, React.js, Vue.js, PostgreSQL, MongoDB, Redis, AWS Lambda, Serverless Framework, Docker, Linux, CircleCI, CUDA, Celery
                    </Text>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience (continued)</Text>
                    
                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>Ripio - Development Team Leader</Text>
                    </View>
                    <Text style={styles.experienceDate}>July 2021 - December 2021 (6 months)</Text>
                    <Text style={styles.experienceDescription}>
                        Assigned as Team Leader of a new development team in charge of the development of Ripio's services focused on VIP clients (OTC). This opportunity allowed me to put into practice all the concepts and knowledge about engineering methodologies and techniques.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Django, PostgreSQL, Git, REST, Leadership, Team Management
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>Ripio - Full stack developer</Text>
                    </View>
                    <Text style={styles.experienceDate}>February 2020 - June 2021 (1 year 5 months)</Text>
                    <Text style={styles.experienceDescription}>
                        Primarily developed backend web services and APIs. Also contributed to improving documentation and communication processes, proposing a standardized README format and creating a documentation infrastructure. Explored new technologies like NodeJS, MongoDB, and ExpressJS for small service projects.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Django, PostgreSQL, MongoDB, Mongoose, Git, REST, NodeJS, ExpressJS
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.companyHeader}>
                        <Text style={styles.companyName}>BPS - Banco de Previsión Social - Developer Technician</Text>
                    </View>
                    <Text style={styles.experienceDate}>May 2018 - February 2020 (1 year 10 months)</Text>
                    <Text style={styles.experienceDescription}>
                        One of the developers of a big project called the GRP Project, as part of the team it was my duty to help design and develop the software using Odoo and Python, along with PostgreSQL for database. Also participated in SDES Conectados project using Design Thinking methodology.
                    </Text>
                    <Text style={styles.technologies}>
                        Technologies: Python, Odoo, PostgreSQL, Git, Design Thinking, Requirements Analysis, Testing
                    </Text>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Key Technologies & Skills</Text>
                    
                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Programming Languages</Text>
                        <Text style={styles.skillItem}>• Python (Senior) - Django, Django REST Framework (Senior), Flask (Semi-Senior), Odoo (Semi-Senior)</Text>
                        <Text style={styles.skillItem}>• JavaScript (Semi-Senior) - Node.js, Express.js, React.js (Mid-Level), TypeScript (Mid-Level)</Text>
                        <Text style={styles.skillItem}>• C# (Semi-Senior) - .NET, ASP.NET</Text>
                        <Text style={styles.skillItem}>• Java (Semi-Senior) - Java EE</Text>
                        <Text style={styles.skillItem}>• Ruby (Mid-Level) - Ruby on Rails</Text>
                    </View>

                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Databases</Text>
                        <Text style={styles.skillItem}>• PostgreSQL (Senior), SQLite (Senior), Microsoft SQL Server (Semi-Senior)</Text>
                        <Text style={styles.skillItem}>• MongoDB (Semi-Senior), Redis (Junior)</Text>
                    </View>

                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Cloud & DevOps</Text>
                        <Text style={styles.skillItem}>• AWS (Senior) - Elastic Beanstalk, EC2, Lambda, Secrets Manager, S3, IAM</Text>
                        <Text style={styles.skillItem}>• Microsoft Azure (Senior) - App Service, Function App, PostgreSQL</Text>
                        <Text style={styles.skillItem}>• Google Cloud (Mid-Level), Terraform (Semi-Senior), Docker (Semi-Senior)</Text>
                        <Text style={styles.skillItem}>• CI/CD: GitHub Actions (Senior), CircleCI (Mid-Level)</Text>
                    </View>

                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Machine Learning & AI</Text>
                        <Text style={styles.skillItem}>• Machine Learning (Mid-Level) - Neural Networks, Linear Regression, Naive Bayes</Text>
                        <Text style={styles.skillItem}>• Libraries: Pandas, NumPy, Scikit-Learn, TensorFlow</Text>
                        <Text style={styles.skillItem}>• Tools: Google Collab, DataSpell, Kaggle, OpenAI</Text>
                    </View>

                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Methodologies & Leadership</Text>
                        <Text style={styles.skillItem}>• Agile Development, Scrum (Senior), Design Thinking (Semi-Senior)</Text>
                        <Text style={styles.skillItem}>• Lean Startup (Mid-Level), Continuous Improvement</Text>
                        <Text style={styles.skillItem}>• Team Leadership (Semi-Senior), Project Management</Text>
                    </View>

                    <View style={styles.skillsCategory}>
                        <Text style={styles.skillsCategoryTitle}>Other Tools</Text>
                        <Text style={styles.skillItem}>• Git, GitHub (Senior), GitLab (Semi-Senior)</Text>
                        <Text style={styles.skillItem}>• PyCharm (Senior), Visual Studio (Senior), Jira (Senior), Trello (Senior)</Text>
                        <Text style={styles.skillItem}>• REST APIs (Senior), Postman (Senior)</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFCV;


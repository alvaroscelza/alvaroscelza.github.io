import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import TableHead from "../components/UI/TableHead";
import TableRow from "../components/UI/TableRow";
import {Link} from "react-router-dom";

const KnowledgePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Knowledge"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Knowledge
            </h1>
            <p>
                I joined the Software World back in 2012, since then I've been learning and using several
                technologies, approaches and methodologies. You will find an exhaustive list of them below.
            </p>
            <p style={{ fontSize: '15px' }}>
                <b>Seniority Reference:</b> <br />
                <b>Senior:</b> Highly experienced and immediately productive with these technologies. I’m well-versed in their latest best practices, methodologies, and have developed personal techniques I can share. Comfortable starting on any project, regardless of size or technical debt. <br />
                <b>Semi-Senior:</b> Considerably experienced, comfortable, and familiar with its best practices and patterns. I may need a few days to refresh or master them if I haven’t used them recently. <br />
                <b>Mid-Level:</b> Used these technologies in personal projects or courses. I can apply general software engineering knowledge but need a few weeks of focused work to reach semi-senior level. <br />
                <b>Junior:</b> Limited experience (1-2 months) with these techs, mainly for small tasks or projects. I can build simple software but need more practice to handle larger projects, potentially reaching mid-level in a few weeks with regular use. <br />
                <br />
                (Pro tip: Use Ctrl + F to search for specific technologies! 🙂)
            </p>

            <h2 className={classes.h2}>Programming Languages and Frameworks</h2>
            <table className={classes.table}>
                <TableHead headers={['Language', 'Framework', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Python', '', 'Senior']}/>
                    <TableRow columns={['', 'Django', 'Senior']}/>
                    <TableRow columns={['', 'Django - Django Rest Framework', 'Senior']}/>
                    <TableRow columns={['', 'Django - Wagtail', 'Semi Senior']}/>
                    <TableRow columns={['', 'Odoo', 'Semi Senior']}/>
                    <TableRow columns={['', 'Flask', 'Semi Senior']}/>
                    <TableRow columns={['', 'Pelican', 'Junior']}/>
                    <TableRow columns={['C#', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'NET and ASPNET', 'Semi Senior']}/>
                    <TableRow columns={['', 'Unity', 'Junior']}/>
                    <TableRow columns={['Java', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'Java EE', 'Junior']}/>
                    <TableRow columns={['', 'Android Studio', 'Junior']}/>
                    <TableRow columns={['JavaScript', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'NodeJS - ExpressJS', 'Semi Senior']}/>
                    <TableRow columns={['', 'TypeScript', 'Mid Level']}/>
                    <TableRow columns={['', 'NodeJS - ReactJS Library', 'Mid Level']}/>
                    <TableRow columns={['', 'NodeJS - SailsJS', 'Junior']}/>
                    <TableRow columns={['', 'NodeJS - Electron', 'Junior']}/>
                    <TableRow columns={['', 'NodeJS - NightmareJS', 'Junior']}/>
                    <TableRow columns={['HTML y CSS', '', 'Mid Level']}/>
                    <TableRow columns={['Ruby', '', 'Mid Level']}/>
                    <TableRow columns={['', 'Ruby on Rails', 'Mid Level']}/>
                    <TableRow columns={['C++', '', 'Junior']}/>
                    <TableRow columns={['Haskell', '', 'Junior']}/>
                    <TableRow columns={['PHP', '', 'Junior']}/>
                    <TableRow columns={['Scilab', '', 'Junior']}/>
                    <TableRow columns={['Vue', '', 'Junior']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Artificial Intelligence (AI)</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Machine Learning', '', '', 'Mid Level']}/>
                    <TableRow columns={['', '', 'Linear Regression', 'Mid Level']}/>
                    <TableRow columns={['', '', 'Naive Bayes', 'Mid Level']}/>
                    <TableRow columns={['', 'Neural Networks', '', 'Mid Level']}/>
                    <TableRow columns={['', '', 'Bidirectional Long Short-Term Memory', 'Mid Level']}/>
                    <TableRow columns={['Rule-based AI', '', '', 'Mid Level']}/>
                    <TableRow columns={['RASA', '', '', 'Mid Level']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Database Engines and Managers</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['PostgreSQL', '', 'Senior']}/>
                    <TableRow columns={['', 'DBeaver', 'Senior']}/>
                    <TableRow columns={['', 'PgAdmin', 'Semi Senior']}/>
                    <TableRow columns={['SQLite', '', 'Senior']}/>
                    <TableRow columns={['Microsoft SQL Server', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'Microsoft SQL Server Management Studio', 'Semi Senior']}/>
                    <TableRow columns={['Oracle SQL', '', 'Mid Level']}/>
                    <TableRow columns={['MySQL', '', 'Mid Level']}/>
                    <TableRow columns={['', 'phpMyAdmin', 'Mid Level']}/>
                    <TableRow columns={['MongoDB', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'Mongoose', 'Semi Senior']}/>
                    <TableRow columns={['', 'MongoDB Compass', 'Semi Senior']}/>
                    <TableRow columns={['', 'Mongo Atlas Search', 'Junior']}/>
                    <TableRow columns={['Redis', '', 'Junior']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Versioning and CI/CD</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Git', 'Senior']}/>
                    <TableRow columns={['Github', 'Senior']}/>
                    <TableRow columns={['Github Actions', 'Senior']}/>
                    <TableRow columns={['Gitlab', 'Semi Senior']}/>
                    <TableRow columns={['SourceTree', 'Semi Senior']}/>
                    <TableRow columns={['SVN', 'Semi Senior']}/>
                    <TableRow columns={['CircleCI', 'Mid Level']}/>
                    <TableRow columns={['Bitbucket', 'Mid Level']}/>
                    <TableRow columns={['Team Foundation Version Control', 'Mid Level']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Cloud</h2>
            <table className={classes.table}>
                <TableHead headers={['Provider', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Microsoft Azure', '', 'Senior']}/>
                    <TableRow columns={['', 'App Service', 'Senior']}/>
                    <TableRow columns={['', 'Azure Database for PostgreSQL single server', 'Senior']}/>
                    <TableRow columns={['', 'Azure Database for PostgreSQL flexible server', 'Senior']}/>
                    <TableRow columns={['', 'Function App', 'Semi Senior']}/>
                    <TableRow columns={['AWS', '', 'Senior']}/>
                    <TableRow columns={['', 'Elastic Beanstalk', 'Senior']}/>
                    <TableRow columns={['', 'Secrets Manager', 'Senior']}/>
                    <TableRow columns={['', 'EC2', 'Senior']}/>
                    <TableRow columns={['', 'IAM', 'Semi Senior']}/>
                    <TableRow columns={['', 'S3', 'Semi Senior']}/>
                    <TableRow columns={['', 'Lambda', 'Semi Senior']}/>
                    <TableRow columns={['', 'Serverless', 'Semi Senior']}/>
                    <TableRow columns={['', 'Serverless Offline', 'Semi Senior']}/>
                    <TableRow columns={['', 'API Gateway', 'Mid Level']}/>
                    <TableRow columns={['', 'Cloud Watch', 'Mid Level']}/>
                    <TableRow columns={['', 'DynamoDB', 'Mid Level']}/>
                    <TableRow columns={['', 'CodeDeploy', 'Junior']}/>
                    <TableRow columns={['', 'CodePipeline', 'Junior']}/>
                    <TableRow columns={['', 'SQS', 'Junior']}/>
                    <TableRow columns={['GitHub Pages', '', 'Semi Senior']}/>
                    <TableRow columns={['Google Cloud', '', 'Mid Level']}/>
                    <TableRow columns={['', 'Compute Engine', 'Mid Level']}/>
                    <TableRow columns={['', 'App Engine', 'Mid Level']}/>
                    <TableRow columns={['Heroku', '', 'Junior']}/>
                    <TableRow columns={['DataDog', '', 'Junior']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Project Management</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Agile Development', '', '', 'Senior']}/>
                    <TableRow columns={['', 'Scrum', '', 'Senior']}/>
                    <TableRow columns={['', 'Custom Methodologies', '', 'Semi Senior']}/>
                    <TableRow columns={['', '', 'SDLC Iterative Incremental', 'Semi Senior']}/>
                    <TableRow columns={['', '', 'SDLC Incremental', 'Semi Senior']}/>
                    <TableRow columns={['', '', 'SDLC Iterative Incremental', 'Semi Senior']}/>
                    <TableRow columns={['', 'Lean Startup', '', 'Mid Level']}/>
                    <TableRow columns={['', '', 'SDLC Evolutionary', 'Mid Level']}/>
                    <TableRow columns={['Traditional Development', '', '', 'Semi Senior']}/>
                    <TableRow columns={['', '', 'SDLC Waterfall', 'Semi Senior']}/>
                    <TableRow columns={['Design Thinking', '', '', 'Semi Senior']}/>
                    <TableRow columns={['Team Leadership', '', '', 'Semi Senior']}/>
                    <TableRow columns={['Negotiation', '', '', 'Mid Level']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Operative Systems</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Windows', '', 'Senior']}/>
                    <TableRow columns={['Linux', '', 'Semi Senior']}/>
                    <TableRow columns={['', 'Ubuntu', 'Mid Level']}/>
                    <TableRow columns={['', 'Mint', 'Mid Level']}/>
                    <TableRow columns={['', 'Debian', 'Junior']}/>
                    <TableRow columns={['Mac', '', 'Semi Senior']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>IDEs</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['PyCharm', 'Senior']}/>
                    <TableRow columns={['Visual Studio', 'Senior']}/>
                    <TableRow columns={['Netbeans', 'Semi Senior']}/>
                    <TableRow columns={['Notepad++', 'Semi Senior']}/>
                    <TableRow columns={['Sublime Text', 'Semi Senior']}/>
                    <TableRow columns={['RubyMine', 'Semi Senior']}/>
                    <TableRow columns={['Fleet', 'Mid Level']}/>
                    <TableRow columns={['Visual Studio Code', 'Mid Level']}/>
                    <TableRow columns={['WebStorm', 'Mid Level']}/>
                    <TableRow columns={['Unity', 'Junior']}/>
                    <TableRow columns={['Android Studio', 'Junior']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Management Tools</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Trello', 'Senior']}/>
                    <TableRow columns={['Jira', 'Senior']}/>
                    <TableRow columns={['Redmine', 'Mid Level']}/>
                    <TableRow columns={['Pivotal', 'Mid Level']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Miscellaneous</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['REST', 'Senior']}/>
                    <TableRow columns={['Postman', 'Senior']}/>
                    <TableRow columns={['Terraform', 'Semi Senior']}/>
                    <TableRow columns={['Docker + Docker-Compose', 'Semi Senior']}/>
                    <TableRow columns={['Celery', 'Mid Level']}/>
                    <TableRow columns={['VirtualBox', 'Mid Level']}/>
                    <TableRow columns={['Microsoft IIS', 'Mid Level']}/>
                    <TableRow columns={['jQuery', 'Mid Level']}/>
                    <TableRow columns={['MarkDown', 'Mid Level']}/>
                    <TableRow columns={['Smarty', 'Mid Level']}/>
                    <TableRow columns={['BNFC', 'Junior']}/>
                    <TableRow columns={['Desarrollo de Videojuegos', 'Junior']}/>
                    <TableRow columns={['SOAP', 'Junior']}/>
                    <TableRow columns={['SOAP UI', 'Junior']}/>
                    <TableRow columns={['Selenium', 'Junior']}/>
                    <TableRow columns={['Flower', 'Junior']}/>
                    <TableRow columns={['uWSGI', 'Junior']}/>
                    <TableRow columns={['Mocha', 'Junior']}/>
                    <TableRow columns={['Chai', 'Junior']}/>
                    <TableRow columns={['Fakingoose', 'Junior']}/>
                </tbody>
            </table>

            <p>Is something missing? <Link to="/contact" className={classes.link}>Let me know!</Link> :)</p>
        </>
    );
}

export default KnowledgePage;

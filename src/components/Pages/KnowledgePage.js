import classes from "./Pages.module.css";
import {useEffect} from "react";
import TableHead from "../UI/TableHead";
import TableRow from "../UI/TableRow";
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
                I started in the Software World back in 2012, since then I've been learning and using several
                technologies, approaches and methodologies. <br/>
                (Pro tip: ctrl + f to search what you need 🙂)
            </p>

            <h2 className={classes.h2}>Programming Languages and Frameworks</h2>
            <table className={classes.table}>
                <TableHead headers={['Language', 'Framework', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Python', '', '4+ years']}/>
                    <TableRow columns={['', 'Django', '2+ years']}/>
                    <TableRow columns={['', 'Odoo', '2 years']}/>
                    <TableRow columns={['', 'Flask', '2 months']}/>
                    <TableRow columns={['', 'Pelican', '1 month']}/>
                    <TableRow columns={['C#', '', '3+ years']}/>
                    <TableRow columns={['', 'NET and ASPNET', '3 years']}/>
                    <TableRow columns={['', 'Unity', '6 months']}/>
                    <TableRow columns={['Java', '', '3+ years']}/>
                    <TableRow columns={['', 'No Framework', '2+ years']}/>
                    <TableRow columns={['', 'Java EE', '6 months']}/>
                    <TableRow columns={['', 'Android Studio', '6 months']}/>
                    <TableRow columns={['JavaScript', '', '1 year']}/>
                    <TableRow columns={['', 'No Framework', '5 months']}/>
                    <TableRow columns={['', 'NodeJS - ExpressJS', '2 months']}/>
                    <TableRow columns={['', 'NodeJS - SailsJS', '1 month']}/>
                    <TableRow columns={['', 'NodeJS - Electron', '1 month']}/>
                    <TableRow columns={['', 'NodeJS - NightmareJS', '1 month']}/>
                    <TableRow columns={['', 'ReactJS Library', '5 months']}/>
                    <TableRow columns={['C++', '', '1 year']}/>
                    <TableRow columns={['', 'No Framework', '1 year']}/>
                    <TableRow columns={['Ruby', '', '1 year']}/>
                    <TableRow columns={['', 'Ruby on Rails', '1 year']}/>
                    <TableRow columns={['Haskell', '', '1 year']}/>
                    <TableRow columns={['', 'No Framework', '1 year']}/>
                    <TableRow columns={['PHP', '', '6 months']}/>
                    <TableRow columns={['', 'No Framework', '6 months']}/>
                    <TableRow columns={['Scilab', '', '6 months']}/>
                    <TableRow columns={['Vue', '', '1 month']}/>
                    <TableRow columns={['HTML y CSS', '', 'On demand']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Databases</h2>
            <p>Always on demand for specific queries to DB. Even though I had advanced DB classes on College, after
                those I've never worked specifically in that area, and thus, I became a little rusty in it.</p>
            <table className={classes.table}>
                <TableHead headers={['Engine', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['PostgreSQL', '4+ years']}/>
                    <TableRow columns={['Microsoft SQL Server', '2 years']}/>
                    <TableRow columns={['Oracle SQL', '1 year']}/>
                    <TableRow columns={['SQLite', '1 year']}/>
                    <TableRow columns={['MySQL', '6 months']}/>
                    <TableRow columns={['MongoDB', '2 months']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Versioning</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Git', '8 years']}/>
                    <TableRow columns={['Github', '7 years']}/>
                    <TableRow columns={['Gitlab', '4 years']}/>
                    <TableRow columns={['SourceTree', '1 year']}/>
                    <TableRow columns={['Bitbucket', '6 months']}/>
                    <TableRow columns={['Team Foundation Version Control', '6 months']}/>
                    <TableRow columns={['SVN', '6 months']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Cloud</h2>
            <table className={classes.table}>
                <TableHead headers={['Provider', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Google Cloud', '', '6 months']}/>
                    <TableRow columns={['', 'Compute Engine', '4 months']}/>
                    <TableRow columns={['', 'App Engine', '2 months']}/>
                    <TableRow columns={['Microsoft Azure', '', '4 months']}/>
                    <TableRow columns={['Heroku', '', '1 month']}/>
                    <TableRow columns={['GitHub Pages', '', '1 month']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Methodologies and Approaches</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Agile Development', '', '', '6 years']}/>
                    <TableRow columns={['', 'Custom Methodologies', '', '4+ years']}/>
                    <TableRow columns={['', '', 'SDLC Iterative Incremental', '2+ years']}/>
                    <TableRow columns={['', '', 'SDLC Incremental', '2 years']}/>
                    <TableRow columns={['', 'Lean Startup', '', '1 year']}/>
                    <TableRow columns={['', '', 'SDLC Evolutionary', '1 year']}/>
                    <TableRow columns={['', 'Scrum', '', '1 year']}/>
                    <TableRow columns={['', '', 'SDLC Iterative Incremental', '6 months']}/>
                    <TableRow columns={['Traditional Development', '', '', '2 years']}/>
                    <TableRow columns={['', '', 'SDLC Waterfall', '2 years']}/>
                    <TableRow columns={['Design Thinking', '', '', '2 years']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Operative Systems</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', '', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Windows', '', '20+ years']}/>
                    <TableRow columns={['Linux', '', '1+ years']}/>
                    <TableRow columns={['', 'Ubuntu', '8 months']}/>
                    <TableRow columns={['', 'Mint', '6 months']}/>
                    <TableRow columns={['', 'Debian', '4 months']}/>
                    <TableRow columns={['Mac', '', '2+ years']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>IDEs</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['PyCharm', '4+ years']}/>
                    <TableRow columns={['Visual Studio', '4 years']}/>
                    <TableRow columns={['Netbeans', '2+ years']}/>
                    <TableRow columns={['Notepad++', '1+ years']}/>
                    <TableRow columns={['Visual Studio Code', '1 year']}/>
                    <TableRow columns={['Sublime Text', '1 year']}/>
                    <TableRow columns={['RubyMine', '6 months']}/>
                    <TableRow columns={['Unity', '6 months']}/>
                    <TableRow columns={['Android Studio', '6 months']}/>
                    <TableRow columns={['WebStorm', '1 month']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Management Tools</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Trello', '4+ years']}/>
                    <TableRow columns={['Jira', '2 years']}/>
                    <TableRow columns={['Redmine', '2 years']}/>
                    <TableRow columns={['Pivotal', '6 months']}/>
                </tbody>
            </table>

            <h2 className={classes.h2}>Miscellaneous</h2>
            <table className={classes.table}>
                <TableHead headers={['Name', 'Seniority']}/>
                <tbody>
                    <TableRow columns={['Postman', '4 years']}/>
                    <TableRow columns={['PgAdmin', '3+ years']}/>
                    <TableRow columns={['REST', '3 years']}/>
                    <TableRow columns={['Django Rest Framework', '2+ years']}/>
                    <TableRow columns={['DBeaver', '2 years']}/>
                    <TableRow columns={['VirtualBox', '2 years']}/>
                    <TableRow columns={['Microsoft IIS', '1+ years']}/>
                    <TableRow columns={['Microsoft SQL Server', '1+ years']}/>
                    <TableRow columns={['Microsoft SQL Server Management Studio', '1+ years']}/>
                    <TableRow columns={['Docker + Docker-Compose', '1 year']}/>
                    <TableRow columns={['BNFC', '6 months']}/>
                    <TableRow columns={['jQuery', '6 months']}/>
                    <TableRow columns={['Desarrollo de Videojuegos', '6 months']}/>
                    <TableRow columns={['SOAP', '3 months']}/>
                    <TableRow columns={['SOAP UI', '3 months']}/>
                    <TableRow columns={['Mongoose', '2 months']}/>
                    <TableRow columns={['phpMyAdmin', '2 months']}/>
                    <TableRow columns={['Smarty', '2 months']}/>
                    <TableRow columns={['MarkDown', '2 months']}/>
                    <TableRow columns={['Selenium', '1 month']}/>
                    <TableRow columns={['Redis', '1 month']}/>
                    <TableRow columns={['Celery', '1 month']}/>
                    <TableRow columns={['Flower', '1 month']}/>
                    <TableRow columns={['uWSGI', '1 month']}/>
                </tbody>
            </table>

            <p>Is something missing? <Link to="/contact" className={classes.link}>Let me know!</Link> :)</p>
        </>
    );
}

export default KnowledgePage;

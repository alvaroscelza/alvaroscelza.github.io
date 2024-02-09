import classes from "./Pages.module.css";
import {useEffect} from "react";
import ExternalLink from "../UI/ExternalLink";
import InternalLink from "../UI/InternalLink";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Home"
    }, []);

    const titleCertificationLink = "https://certificados.ort.edu.uy/app/vIndex.html?p1=181577-G8NPQF97";
    const designThinkingLink = "https://www.designthinking.es/inicio/index.php";
    const continuousImprovementLink = "https://en.wikipedia.org/wiki/Continuous_improvement_process";
    const agileManifestoLink = "https://agilemanifesto.org/";
    const leanStartupLink = "https://en.wikipedia.org/wiki/Lean_startup";
    const uruguayanFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg";
    const italianFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ee-1f1f9.svg";
    const unitedKingdomFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg";

    return (
        <>
            <h1 className={classes.h1}>
                Home
            </h1>
            <div>
                <p>
                    Hey! 👋
                    <br/>
                    I'm Alvaro
                </p>
                <p>
                    👨‍💻 A <ExternalLink link={titleCertificationLink} text="Software Systems Engineer"/> with:
                    <ul>
                        <li>More than a decade in the industry.</li>
                        <li>6+ years using Python, Django and Flask.</li>
                        <li>6+ years using PostgreSQL.</li>
                        <li>3+ years of experience with cloud services, including Azure, AWS, GCloud and Heroku.</li>
                        <li>2+ years using JavaScript, with a focus on React.</li>
                        <li>Also have experience in Machine Learning, Blockchain technologies, CI/CD
                        (with Github Actions and CircleCI), Terraform, REST APIs,
                        and <InternalLink link='/knowledge' text='more'/>.</li>
                    </ul>
                </p>
                <p>
                    📝 I enjoy helping in
                    the <ExternalLink link={designThinkingLink} text="creation and validation of ideas"/>,
                    requirements elicitation and analysis, design (Architecture, OOP and User Interfaces), Software
                    building, testing and maintenance, with <InternalLink link='/knowledge' text='multiple technologies'/>.
                    I can also help you in managing projects and leading development
                    teams.
                </p>
                <p>
                    ➿ An enthusiast of <ExternalLink link={agileManifestoLink} text="agile software development"/>,
                    design and business development methodologies,
                    like <ExternalLink link={leanStartupLink} text="Lean Startup"/>,&nbsp;
                    <ExternalLink link={designThinkingLink} text="Design Thinking"/> and&nbsp;
                    <ExternalLink link={continuousImprovementLink} text="Continuous Improvement"/>.
                </p>
                <p>
                    🧩 More than a decade in the Software industry, I've worked in&nbsp;
                    <InternalLink link='/projects' text='dozens of projects'/>, as both employee and entrepreneur.
                </p>
                <p>
                    <img className={classes.emojiIcon} src={uruguayanFlagLink} alt="🇺🇾"/> From Uruguay :)
                </p>
                <p>
                    <img className={classes.emojiIcon} src={italianFlagLink} alt="it"/> With Italian passport too.
                </p>
                <p>
                    <img className={classes.emojiIcon} src={unitedKingdomFlagLink} alt="🇬🇧"/>
                    Though we can speak English, if you want.
                </p>
                <p>
                    🤖 Self-taught technology fanatic with a keen interest in trending topics such as crypto,
                    blockchain, AI, Machine Learning, and more.
                </p>
            </div>
        </>
    );
}

export default HomePage;

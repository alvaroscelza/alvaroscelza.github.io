import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";
import InternalLink from "../components/UI/InternalLink";
import KnowledgeSearch from "../components/UI/KnowledgeSearch";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Home"
    }, []);

    const kaggleLink = "https://www.kaggle.com/ingalvaroscelza";
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
            <br/>
            <div>
                <p>
                    👨‍💻 <ExternalLink link={titleCertificationLink} text="Software Engineer"/> with:
                    <ul>
                        <li>In the industry <b>since 2012</b>.</li>
                        <li><b>Python</b>, <b>Django</b> and <b>Flask</b> since <b>2018</b>.</li>
                        <li><b>PostgreSQL</b> since <b>2018</b>.</li>
                        <li><b>Cloud</b> services, including <b>Azure</b>, <b>AWS</b>, <b>GCloud</b> and <b>Heroku</b> since <b>2020</b>.</li>
                        <li><b>JavaScript</b>, with a focus on <b>React</b> since <b>2022</b>.</li>
                        <li><b>Machine Learning</b> since <b>2024</b>. Take a look at my <ExternalLink link={kaggleLink} text="Kaggle"/> account.</li>
                        <li>Also with experience in <b>Blockchain</b> technologies, <b>CI/CD</b> (with <b>Github
                            Actions</b> and <b>CircleCI</b>), <b>Terraform</b>, <b>REST APIs</b>,
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
                <KnowledgeSearch />
            </div>
        </>
    );
}

export default HomePage;

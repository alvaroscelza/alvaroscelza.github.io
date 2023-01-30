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
    const skollarsLink = "https://skollars.com/";
    const agileManifestoLink = "https://agilemanifesto.org/";
    const leanStartupLink = "https://en.wikipedia.org/wiki/Lean_startup";
    const uruguayanFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg";
    const unitedKingdomFlagLink = "https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg";
    const lapsaungSouchongLink = "https://en.wikipedia.org/wiki/Lapsang_souchong";

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
                    👨‍💻 A <ExternalLink link={titleCertificationLink} text="Software Systems Engineer"/>, I enjoy
                    helping in the <ExternalLink link={designThinkingLink} text="creation and validation of ideas"/>,
                    requirements elicitation and analysis, design (Architecture, OOP and User Interfaces), Software
                    building, testing and maintenance, with <InternalLink link='/knowledge' text='multiple technologies'/>.
                    I can also help you in managing projects and leading development
                    teams. <ExternalLink link={skollarsLink} text="Take a look at all I can do for you"/>.
                </p>
                <p>
                    ➿ An enthusiast of <ExternalLink link={agileManifestoLink} text="agile software development"/> and
                    also of design methodologies and business development,
                    like <ExternalLink link={leanStartupLink} text="Lean Startup"/> and&nbsp;
                    <ExternalLink link={designThinkingLink} text="Design Thinking"/>.
                </p>
                <p>
                    🧩 I've worked in <InternalLink link='/projects' text='several projects'/>, some of them as an
                    employee and others as entrepreneur.
                </p>
                <p>
                    <img className={classes.emojiIcon} src={uruguayanFlagLink} alt="🇺🇾"/> From Uruguay :)
                </p>
                <p>
                    <img className={classes.emojiIcon} src={unitedKingdomFlagLink} alt="🇬🇧"/>
                    Though we can speak English, if you want.
                </p>
                <p>
                    ✈️ I love Travelling.
                </p>
                <p>
                    ☕ Coffee adict! But I also enjoy types of teas
                    (specially <ExternalLink link={lapsaungSouchongLink} text="Lapsang Souchong"/>).
                </p>
                <p>
                    📈 Crypto and blockchain technologies lover.
                </p>
            </div>
        </>
    );
}

export default HomePage;

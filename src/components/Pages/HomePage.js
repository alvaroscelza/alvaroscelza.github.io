import classes from "./Pages.module.css";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Home"
    }, []);

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
                    👨‍💻 I'm a&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://certificados.ort.edu.uy/app/vIndex.html?p1=181577-G8NPQF97">
                        Software Systems Engineer
                    </a>,
                    I enjoy helping in the&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://www.designthinking.es/inicio/index.php">
                        creation and validation of ideas
                    </a>,
                    requirements elicitation and analysis, design (Architecture, OOP and User Interfaces), Software
                    building, testing and maintenance, with&nbsp;
                    <Link to='/knowledge' className={classes.link}>multiple technologies</Link>.
                    I can also help you in managing projects and leading development teams.&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link} href="https://skollars.com/">
                        Take a look at all I can do for you
                    </a>.
                </p>
                <p>
                    ➿ I'm an enthusiast of <a target="_blank" rel="noopener noreferrer" className={classes.link}
                                              href="https://agilemanifesto.org/">agile software development</a> and
                    also of design methodologies and business development, like&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://en.wikipedia.org/wiki/Lean_startup">Lean Startup</a> and&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://www.designthinking.es/inicio/index.php">Design Thinking</a>.
                </p>
                <p>
                    🧩 I've worked in <Link to="/projects" className={classes.link}>several projects</Link>,
                    some of them as an employee and others as entrepreneur.
                </p>
                <p>
                    <img className={classes.img} src="https://s.w.org/images/core/emoji/13.1.0/svg/1f1fa-1f1fe.svg"
                         alt="🇺🇾"/> I'm from Uruguay :)
                </p>
                <p>
                    <img className={classes.img} src="https://s.w.org/images/core/emoji/13.1.0/svg/1f1ec-1f1e7.svg"
                         alt="🇬🇧"/>
                    Though <Link to="/lets-speak-english" className={classes.link}>we can speak English</Link>,
                    if you want.
                </p>
                <p>
                    ✈️ I love travelling.
                </p>
                <p>
                    ☕ I enjoy coffee and some types of teas (specially&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://en.wikipedia.org/wiki/Lapsang_souchong">
                        Lapsang Souchong
                    </a>).
                </p>
                <p>
                    📈 Crypto and blockchain technologies lover.
                </p>
                <p>
                    📚 I like reading about&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className={classes.link}
                       href="https://en.wikipedia.org/wiki/Political_philosophy">
                        Political Philosophy
                    </a>.
                </p>
            </div>
        </>
    );
}

export default HomePage;

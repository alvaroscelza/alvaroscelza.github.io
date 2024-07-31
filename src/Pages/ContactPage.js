import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";

const ContactPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Contact"
    }, []);

    const emailLink = "mailto:alvaroscelza@gmail.com";
    const githubLink = "https://github.com/alvaroscelza";
    const linkedinLink = "https://www.linkedin.com/in/ing-alvaro-scelza/";

    return (
        <>
            <h1 className={classes.h1}>
                Contact
            </h1>
            <p>📧 Email: <ExternalLink link={emailLink} text="alvaroscelza@gmail.com"/></p>
            <p>🐙 Github: <ExternalLink link={githubLink} text="https://github.com/alvaroscelza"/></p>
            <p>💻 LinkedIn: <ExternalLink link={linkedinLink} text="https://www.linkedin.com/in/ing-alvaro-scelza/"/></p>
        </>
    );
}

export default ContactPage;

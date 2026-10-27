import classes from "../components/UI/UI.module.css";
import {useEffect} from "react";
import ExternalLink from "../components/UI/ExternalLink";
import profile from "../data/profile.mjs";

const ContactPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Contact"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Contact
            </h1>
            <p>📧 Email: <ExternalLink link={profile.links.email.href} text={profile.links.email.text}/></p>
            <p>🐙 Github: <ExternalLink link={profile.links.github.href} text={profile.links.github.text}/></p>
            <p>💻 LinkedIn: <ExternalLink link={profile.links.linkedin.href} text={profile.links.linkedin.text}/></p>
        </>
    );
}

export default ContactPage;

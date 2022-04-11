import classes from "./Pages.module.css";
import {useEffect} from "react";

const ContactPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Contact"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Contact
            </h1>
        </>
    );
}

export default ContactPage;

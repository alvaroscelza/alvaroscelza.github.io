import classes from "./Pages.module.css";
import {useEffect} from "react";

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
                Me inserté en el mundo del Software desde el 2012, desde entonces he aprendido y/o utilizado varias
                tecnologías, enfoques y metodologías. <br/>
                (Pro tip: ctrl + f para buscar lo que necesitas 🙂)
            </p>
        </>
    );
}

export default KnowledgePage;

import classes from "./Pages.module.css";

const Home = () => {
    return (
        <>
            <h1 className={classes.h1}>
                Home
            </h1>
            <div>
                <p>
                    Hey! 👋
                    <br/>
                    Soy Alvaro
                </p>
                <p>
                    👨‍💻 Soy <a className={classes.link}
                                 href="https://certificados.ort.edu.uy/app/vIndex.html?p1=181577-G8NPQF97">Ingeniero en
                    Sistemas
                    de Software</a>,
                    me dedico a ayudar en la <a className={classes.link}
                                                href="https://www.designthinking.es/inicio/index.php">creación y
                    validación de ideas</a>,
                    relevamiento y análisis de requerimientos, diseño (Arquitectura, OOP e interfaces de usuario),
                    construcción,
                    testing y mantenimiento de Software, con <a className={classes.link}
                                                                href="/pages/conocimientos.html">varias tecnologías</a>.
                    Además también gestiono proyectos y lidero equipos de desarrollo. <a className={classes.link}
                                                                                         href="https://skollars.com/">Mira
                    todo lo que puedo hacer por ti</a>.
                </p>
            </div>
        </>
    );
}

export default Home;

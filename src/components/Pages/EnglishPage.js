import classes from "./Pages.module.css";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import englishVideo from '../../videos/english.mp4';

const EnglishPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Let's speak English!"
    }, []);

    return (
        <>
            <h1 className={classes.h1}>
                Let's speak English!
            </h1>
            <p>
                I received my&nbsp;
                <a target="_blank" rel="noopener noreferrer" className={classes.link}
                   href="https://www.cambridgeenglish.org/exams-and-tests/first/">Cambridge: First Certificate in
                    English</a> in 2009. Since then, I haven't had much opportunity to practice it and so it became kind
                of rusty 😬. <br/>
                Yet I've tried to recover it by watching series and movies, listening to music and using all my apps and
                OSs in English. <br/>
                <br/>
                I'm currently taking some classes to get more fluent in speaking too. <br/>
                I figured that the best way to give you an idea of how well (or bad) I'm at it was by recording
                myself talking. <br/>
                So I decided to kill two birds with one stone and take advantage of this video to also let you know
                a bit about myself. <br/>
                <br/>
                Feel free to <Link to="/contact" className={classes.link}>give me your opinion and/or
                feedback</Link> about it.
            </p>
            <video width="650" height="400" controls>
                <source src={englishVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <p>
                Correction: the book <a target="_blank" rel="noopener noreferrer" className={classes.link}
                href="https://books.google.com.uy/books/about/Agile_Estimating_And_Planning.html?id=dzB09hXDPhUC&source=kp_book_description&redir_esc=y">Agile
                Estimating and Planning</a> was written by Mike Cohn, not Robert C. Martin.
            </p>
        </>
    );
}

export default EnglishPage;

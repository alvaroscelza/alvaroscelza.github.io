import classes from "./Pages.module.css";
import {useEffect} from "react";
import englishVideo from '../../videos/english.mp4';
import ExternalLink from "../UI/ExternalLink";
import InternalLink from "../UI/InternalLink";

const EnglishPage = () => {
    useEffect(() => {
        document.title = "Alvaro Scelza - Let's speak English!"
    }, []);

    const FCELink = "https://www.cambridgeenglish.org/exams-and-tests/first/";
    const agileEstimatingAndPlanningLink = "https://books.google.com.uy/books/about/Agile_Estimating_And_Planning.html?id=dzB09hXDPhUC&source=kp_book_description&redir_esc=y";

    return (
        <>
            <h1 className={classes.h1}>
                Let's speak English!
            </h1>
            <p>
                I received my <ExternalLink link={FCELink} text="Cambridge: First Certificate in English"/> in 2009.
                Since then, I haven't had much opportunity to practice it and so it became kind of rusty 😬. <br/>
                Yet I've tried to recover it by watching series and movies, listening to music and using all my apps and
                OSs in English. <br/>
                <br/>
                I'm currently taking some classes to get more fluent in speaking too. <br/>
                I figured that the best way to give you an idea of how well (or bad) I'm at it was by recording
                myself talking. <br/>
                So I decided to kill two birds with one stone and take advantage of this video to also let you know
                a bit about myself. <br/>
                <br/>
                Feel free to <InternalLink link='/contact' text='give me your opinion and/or feedback'/> about it.
            </p>
            <video width="650" height="400" controls>
                <source src={englishVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <p>
                Correction: the
                book <ExternalLink link={agileEstimatingAndPlanningLink} text="Agile Estimating and Planning"/> was
                written by Mike Cohn, not Robert C. Martin.
            </p>
        </>
    );
}

export default EnglishPage;

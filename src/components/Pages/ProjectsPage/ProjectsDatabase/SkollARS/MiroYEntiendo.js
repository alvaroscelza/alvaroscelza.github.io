import ProjectTechnologies from "../../ProjectsPageComponents/ProjectTechnologies";
import ProjectDescription from "../../ProjectsPageComponents/ProjectDescription";
import miroYEntiendoVideo from '../../../../../videos/miro-y-entiendo-bug.mp4';
import classes from "../../../Pages.module.css";
import ExternalLink from "../../../../UI/ExternalLink";

const miroYEntiendoTechnologies =
    <ProjectTechnologies>
        C# Unity
        <br/>
        2017 - 6 months
    </ProjectTechnologies>

const miroYEntiendoLink = "https://mordecki.com/wp-content/uploads/2021/06/MiroyEntiendo.pdf";

const miroYEntiendoDescription =
    <ProjectDescription>
        <p>
            As one of the optional courses on my career, I chose Video-games Development (from spanish Desarrollo de
            Videojuegos), a fascinating course whose project implied the construction of a video-game in C# or
            Javascript,
            this game could be done in 2D, 3D or VR. <br/>
            <br/>
            With a classmate we built a game in 3D using C#. The topic was puzzles solution commanding the main
            character:
            a sympathetic robot that must overcome diverse obstacles and dangers to advance levels. <br/>
            <br/>
            We kind of had some... contingencies 😂
        </p>
        <p className={classes.textAlignCenter}>
            <video width="300" height="200" controls>
                <source src={miroYEntiendoVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </p>
        <p>
            But we finally managed our goal and exonerated the course with 100/100. <br/>
            <br/>
            So why the name? "Miro y Entiendo" would roughly mean "Look and understand". We had just exonerated the
            optional course User Interfaces Design ("Diseño de Interfaces de Usuario") together, whose teacher wrote
            the book <ExternalLink link={miroYEntiendoLink} text="Miro y Entiendo"/>. We loved the course and its
            teachings so much: "a UI must be so good that it should explain itself", that we decided to do it the small
            honor, since we set ourselves as goal, that the game would have to explain itself without the need for
            tutorials.
        </p>
    </ProjectDescription>

export {miroYEntiendoTechnologies, miroYEntiendoDescription};

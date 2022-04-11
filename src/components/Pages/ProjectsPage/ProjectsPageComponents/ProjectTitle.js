import classes from "../../Pages.module.css";

const ProjectTitle = ({titleLink, linkedTitle, restOfTitle}) => {
    return (
        <h3 className={classes.h3}>
            <a target="_blank" rel="noopener noreferrer" className={classes.link} href={titleLink}>
                {linkedTitle}
            </a> {restOfTitle}
        </h3>
    );
}

export default ProjectTitle;

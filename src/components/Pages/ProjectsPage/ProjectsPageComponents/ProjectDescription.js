import classes from "../../Pages.module.css";

const ProjectDescription = (props) => {
    return (
        <p className={classes.projectDescription}>
            {props.children}
        </p>
    );
}

export default ProjectDescription;

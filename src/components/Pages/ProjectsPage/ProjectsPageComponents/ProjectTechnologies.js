import classes from "../../Pages.module.css";

const ProjectTechnologies = (props) => {
    return (
        <p className={classes.projectTechnologies}>
            {props.children}
        </p>
    );
}

export default ProjectTechnologies;

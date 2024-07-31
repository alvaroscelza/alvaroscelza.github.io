import classes from "../../../components/UI/UI.module.css";

const ExperienceDescription = (props) => {
    return (
        <p className={classes.experienceDescription}>
            {props.children}
        </p>
    );
}

export default ExperienceDescription;

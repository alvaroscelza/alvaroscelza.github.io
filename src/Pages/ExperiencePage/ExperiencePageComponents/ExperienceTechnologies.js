import classes from "../../../components/UI/UI.module.css";

const ExperienceTechnologies = (props) => {
    return (
        <p className={classes.experienceTechnologies}>
            {props.children}
        </p>
    );
}

export default ExperienceTechnologies;

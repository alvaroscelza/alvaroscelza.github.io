import classes from "./VisualExperience.module.css";

const VisualExperience = ({ children }) => {
    return (
        <div className={classes.visualExperience}>
            {children}
        </div>
    );
};

export default VisualExperience;


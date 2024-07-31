import classes from "../../../components/UI/UI.module.css";
import ExternalLink from "../../../components/UI/ExternalLink";

const ExperienceTitle = ({titleLink, linkedTitle, restOfTitle}) => {
    return (
        <h3 className={classes.h3}>
            <ExternalLink link={titleLink} text={linkedTitle}/> {restOfTitle}
        </h3>
    );
}

export default ExperienceTitle;

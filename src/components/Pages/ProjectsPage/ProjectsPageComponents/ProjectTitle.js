import classes from "../../Pages.module.css";
import ExternalLink from "../../../UI/ExternalLink";

const ProjectTitle = ({titleLink, linkedTitle, restOfTitle}) => {
    return (
        <h3 className={classes.h3}>
            <ExternalLink link={titleLink} text={linkedTitle}/> {restOfTitle}
        </h3>
    );
}

export default ProjectTitle;

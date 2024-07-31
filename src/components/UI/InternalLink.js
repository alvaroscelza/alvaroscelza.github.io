import classes from "../UI/UI.module.css";
import {Link} from "react-router-dom";

const InternalLink = ({link, text}) => {
    return (
        <Link to={link} className={classes.link}>{text}</Link>
    );
}

export default InternalLink;

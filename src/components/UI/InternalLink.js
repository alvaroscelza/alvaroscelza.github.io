import classes from "../Pages/Pages.module.css";
import {Link} from "react-router-dom";

const InternalLink = ({link, text}) => {
    return (
        <Link to={link} className={classes.link}>{text}</Link>
    );
}

export default InternalLink;

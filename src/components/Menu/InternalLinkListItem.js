import classes from './InternalLinkListItem.module.css';
import {Link} from "react-router-dom";

const InternalLinkListItem = ({text, link}) => {
    return (
        <li>
            <Link className={classes.link} to={link}>{text}</Link>
        </li>
    );
}

export default InternalLinkListItem;

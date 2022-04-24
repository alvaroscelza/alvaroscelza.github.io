import classes from './SocialMediaLink.module.css';
import ExternalLink from "../UI/ExternalLink";

const SocialMediaLink = ({name, link, image}) => {
    return (
        <li className={classes.li}>
            <ExternalLink link={link} text={<img className={classes.img} src={image} alt={name} width='45' height='45'/>}/>
        </li>
    );
}

export default SocialMediaLink;

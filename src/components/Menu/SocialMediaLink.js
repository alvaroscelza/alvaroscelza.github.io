import classes from './SocialMediaLink.module.css';

const SocialMediaLink = ({name, link, image}) => {
    return (
        <li className={classes.li}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <img className={classes.img} src={image} alt={name} width='45' height='45'/>
            </a>
        </li>
    );
}

export default SocialMediaLink;

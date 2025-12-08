import classes from "../UI/UI.module.css";

const ExternalLink = ({link, text, className}) => {
    return (
        <a target="_blank" rel="noopener noreferrer" className={className || classes.link} href={link}>
            {text}
        </a>
    );
}

export default ExternalLink;

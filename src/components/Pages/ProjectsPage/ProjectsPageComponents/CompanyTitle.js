import classes from "../../Pages.module.css";

const CompanyTitle = (props) => {
    const image = props.companyImage;
    const imageAltText = props.companyImageAltText;
    const link = props.companyWebLink;
    const name = props.companyName;

    return (
        <h2 className={classes.h2}>
            <img className={classes.companyImage} src={image} alt={imageAltText} width="50" height="50"/>
            <a target="_blank" rel="noopener noreferrer" className={classes.link} href={link}>{name}</a>
        </h2>
    );
}

export default CompanyTitle;

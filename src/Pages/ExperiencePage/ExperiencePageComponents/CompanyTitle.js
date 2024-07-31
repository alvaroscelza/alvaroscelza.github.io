import classes from "../../../components/UI/UI.module.css";
import ExternalLink from "../../../components/UI/ExternalLink";

const CompanyTitle = (props) => {
    const image = props.companyImage;
    const imageAltText = props.companyImageAltText;
    const link = props.companyWebLink;
    const name = props.companyName;

    return (
        <h2 className={classes.h2}>
            <img className={classes.companyImage} src={image} alt={imageAltText} width="50" height="50"/>
            <ExternalLink link={link} text={name}/>
        </h2>
    );
}

export default CompanyTitle;

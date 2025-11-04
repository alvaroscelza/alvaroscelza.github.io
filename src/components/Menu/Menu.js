import classes from './Menu.module.css';
import {Link} from 'react-router-dom';
import SocialMediaLink from "./SocialMediaLink";
import InternalLinkListItem from "./InternalLinkListItem";

const Menu = () => {
    return (
        <aside className={classes.aside}>
            <h1 className={classes.h1}>Alvaro Scelza</h1>
            <Link to='/'>
                <img className={classes.img} src='/static/images/profile_picture.jpg' alt='Me'/>
            </Link>
            <ul className={classes.ul}>
                <SocialMediaLink name='LinkedIn' link='https://www.linkedin.com/in/ing-alvaro-scelza'
                                 image='/static/images/linkedin.png'/>
                <SocialMediaLink name='GitHub' link='https://github.com/alvaroscelza' image='/static/images/github.png'/>
                <SocialMediaLink name='StackOverflow'
                                 link='https://stackoverflow.com/users/5750078/alvaro-rodriguez-scelza?tab=profile'
                                 image='/static/images/stackoverflow.png'/>
                <SocialMediaLink name='Kaggle' link='https://www.kaggle.com/ingalvaroscelza' image='/static/images/kaggle.png'/>
            </ul>
            <ul className={`${classes.ul} ${classes.topPadding1EM}`}>
                <InternalLinkListItem text='Knowledge' link='/knowledge'/>
                <InternalLinkListItem text='Experience' link='/experience'/>
                <InternalLinkListItem text='Contact' link='/contact'/>
            </ul>
        </aside>
    );
}

export default Menu;

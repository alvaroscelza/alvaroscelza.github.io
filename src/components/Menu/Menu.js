import classes from './Menu.module.css';
import {Link} from 'react-router-dom';
import profileImage from '../../images/profile.webp';
import linkedinImage from '../../images/linkedin.png';
import githubImage from '../../images/github.png';
import stackoverflowImage from '../../images/stackoverflow.png';
import SocialMediaLink from "./SocialMediaLink";
import InternalLinkListItem from "./InternalLinkListItem";

const Menu = () => {
    return (
        <aside className={classes.aside}>
            <h1 className={classes.h1}>Alvaro Scelza</h1>
            <Link to='/'>
                <img className={classes.img} src={profileImage} alt='Me'/>
            </Link>
            <ul className={classes.ul}>
                <SocialMediaLink name='LinkedIn' link='https://www.linkedin.com/in/ing-alvaro-scelza'
                                 image={linkedinImage}/>
                <SocialMediaLink name='GitHub' link='https://github.com/alvaroscelza' image={githubImage}/>
                <SocialMediaLink name='StackOverflow'
                                 link='https://stackoverflow.com/users/5750078/alvaro-rodriguez-scelza?tab=profile'
                                 image={stackoverflowImage}/>
            </ul>
            <ul className={classes.ul}>
                <InternalLinkListItem text='Knowledge' link='/knowledge'/>
                <InternalLinkListItem text='Projects' link='/projects'/>
                <InternalLinkListItem text='Contact' link='/contact'/>
            </ul>
        </aside>
    );
}

export default Menu;

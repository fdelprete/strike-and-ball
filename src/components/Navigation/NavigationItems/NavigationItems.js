import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={`${process.env.PUBLIC_URL}/`} active='true'>Nuova Partita</NavigationItem>
        <NavigationItem showHelp={props.showHelp} link="#">Regole</NavigationItem>
    </ul>
);

export default navigationItems;

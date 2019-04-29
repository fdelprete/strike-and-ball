import React from 'react';
import sbLogo from '../../assets/images/sb-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={sbLogo} alt="Strike and Bull"/>
    </div>
);

export default logo;
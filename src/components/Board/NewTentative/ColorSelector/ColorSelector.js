import React from 'react';
import classes from './ColorSelector.module.css';

const colorSelector = (props) => {
    const colorMap = [
        { num: '0', color : classes.Dot_0 },
        { num: '1', color : classes.Dot_1 },
        { num: '2', color : classes.Dot_2 },
        { num: '3', color : classes.Dot_3 },
        { num: '4', color : classes.Dot_4 },
        { num: '5', color : classes.Dot_5 },
        { num: '6', color : classes.Dot_6 },
        { num: '7', color : classes.Dot_7 },
        { num: '8', color : classes.Dot_8 },
        { num: '9', color : classes.Dot_9 },
    ];

    return (
        <div className={classes.ColorSelector}>
            {colorMap.map(colr => (
                <div 
                    key={colr.num} 
                    onClick={()=> props.click(colr.num)} 
                    className={colr.color}>{props.showNumber ? colr.num : null}</div>
                ))}
        </div>
    );

}

export default colorSelector;
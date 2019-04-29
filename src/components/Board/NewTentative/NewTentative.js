import React from 'react';
import classes from './NewTentative.module.css';


const newTentative = (props) => {
    // const cifre =[0,1,2,3,4,5,6,7,8,9];
    // const opzioni = x => <option key={x}>{x}</option>;
    let selectedClass = 'divTableCell CurrPos Dot_';
    let stdClass = 'divTableCell Dot_';
    return ( 
    <div className={classes.NewTentative}>
        <div 
          onClick={() => props.selectPos('n0')} 
          className={props.currPos === 'n0' ? selectedClass + props.number[0] : stdClass + props.number[0]}>
            {props.showNumber ? props.number[0] : null}
        </div>
        <div 
          onClick={() => props.selectPos('n1')} 
          className={props.currPos === 'n1' ? selectedClass + props.number[1] : stdClass + props.number[1]}>
            {props.showNumber ? props.number[1] : null} 
        </div>
        <div 
          onClick={() => props.selectPos('n2')} 
          className={props.currPos === 'n2' ? selectedClass + props.number[2] : stdClass + props.number[2]}>
            {props.showNumber ? props.number[2] : null}
        </div>
        <div 
          onClick={() => props.selectPos('n3')} 
          className={props.currPos === 'n3' ? selectedClass + props.number[3] : stdClass + props.number[3]}>
            {props.showNumber ? props.number[3] : null}
        </div>
        <div className={classes.Check}>
            <button 
              onClick={props.check}
              disabled={!props.validNumber}>✔</button>
        </div>
        </div>
    );
};

export default newTentative;
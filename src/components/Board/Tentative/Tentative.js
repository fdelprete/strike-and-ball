import React from 'react';
import classes from './Tentative.module.css';

const tentative = (props) => {
  const numeri = Object.keys(props.number)
            .map(igKey => {
                const style = 'divTabTableCell Dot_' + props.number[igKey];
                return (
                  <div className={style} key={igKey}>
                        {props.showNumber ? props.number[igKey] : null}
                  </div>);
            });
            // {props.resultChecked}
  const strike = props.resultChecked.strike;
  const ball = props.resultChecked.ball;
  let results = [];
  let i = 0;
  let j = 0;

  for(i = 0; i<strike; i++) {
    results.push(<div className={classes.Strike}></div>);
  }
  for(j = 0; j < ball; j++){
    results.push(<div className={classes.Ball}></div>);
  }
  for(let k = strike + ball; k < 4; k++){
    results.push(<div className={classes.Nothing}>-</div>);
  }
  
   return ( 
   <div className={classes.Tentative}>
       {numeri}
       <div className={classes.Result}>
        {results}
       </div>
    </div>
    );
};

export default tentative;
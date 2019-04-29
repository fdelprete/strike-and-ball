import React from 'react';
import classes from './Board.module.css';
import Tentative from './Tentative/Tentative';
import NewTentative from './NewTentative/NewTentative';
import ColorSelector from './NewTentative/ColorSelector/ColorSelector';

const board = (props) => {
    let transformedTentatives = Object.keys(props.tentatives)
        .map(igKey => {
                return (
                <Tentative 
                    key={props.tentatives[igKey].id} 
                    number={props.tentatives[igKey].number} 
                    resultChecked={props.tentatives[igKey].resultChecked}
                    showNumber={props.showNumber}
                />
                )
            } ).reverse();
    //console.log('transformedTentatives', transformedTentatives);
    return (
        <div className={classes.Board}> 
            {!props.solved ?
                <ColorSelector 
                    click={props.colorClicked}
                    showNumber={props.showNumber}
                /> : null}
            {!props.solved ?
                    <NewTentative  
                        validNumber={props.validNumber}
                        check={props.checkNum} 
                        number={props.number} 
                        changeNum={event => props.changeNum(event)}
                        currPos={props.currPos}
                        selectPos={props.selectPos}
                        showNumber={props.showNumber}
                    /> : null}
            {transformedTentatives}
        </div>
    );
}

export default board;
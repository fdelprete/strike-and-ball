import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxi';
import Board from '../../components/Board/Board';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

class SbTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tentatives: [
            ],
            numToGuess: this.makeNumber(4),
            n0: '1',
            n1: '2',
            n2: '3',
            n3: '4',
            solved: false, 
            showVictory: false,
            validNumber: true,
            currPos: 'n0',
            showNumber: false
        };
    }

    makeNumber(length) {
        let result           = '';
        let characters       = '0123456789';
        let charactersLength = characters.length;
        let newChar = '';
        for ( var i = 0; i < length; i++ ) {
            newChar = characters.charAt(Math.floor(Math.random() * charactersLength));
            characters = characters.replace(newChar, '');
            charactersLength = characters.length;
            result += newChar;
        }
        return result;
    }

    // state = {
    //     tentatives: [
    //     ],
    //     numToGuess: '1234',
    //     n0: '1',
    //     n1: '2',
    //     n2: '3',
    //     n3: '4'
    // }

    checkGuessHandler = () => {
        const tentativesCount = this.state.tentatives.length;

        const number = this.state.n0.concat(this.state.n1, this.state.n2, this.state.n3);

        const newTentative = {
            id: tentativesCount, number: number, resultChecked: {strike: 0, ball: 0}
        };

        // const tentativeIndex = this.state.tentatives.findIndex(t => {
        //     return t.id === id;
        // });
      
        // const tentative = {
        //     ...this.state.tentatives[tentativeIndex]
        // };
        
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 4; i++) {
            if (number[i] === this.state.numToGuess[i]) {
                strike = strike + 1;
            }
            for(let j = 0; j < 4; j++) {
                if (number[i] === this.state.numToGuess[j] && i!==j) {
                    ball = ball + 1;
                }    
            }
        }

        //const resultChecked = strike + 's ' + ball + 'b';

        newTentative.resultChecked.strike = strike;
        newTentative.resultChecked.ball = ball;

        const tentatives = [...this.state.tentatives, newTentative];

        this.setState({tentatives: tentatives, solved: strike === 4, showVictory: strike === 4});
    }

    checkForUnique(str) {
        var hashtable = {};
        for(var i=0,len=str.length;i<len;i++){
            if (hashtable[str[i]] != null){
                hashtable[str[i]] = 1;
                return false;
            }else{
                hashtable[str[i]] = 0;
            }
        }
        return true;
    }

    selectPositionHandler = (id) => {
        console.log('selectPositionHandler', id);
        this.setState((prevState, props) => {
            if (prevState.currPos !== id) {
                return {currPos: id};
            } else {
                let numero = '';
                let valore = '';
                switch (id) {
                    case 'n0':
                        valore = ((parseInt(this.state.n0) + 1) % 10).toString();
                        numero = valore.concat(this.state.n1, this.state.n2, this.state.n3);
                        return {'n0' : valore, validNumber: this.checkForUnique(numero)};
                    case 'n1':
                        valore = ((parseInt(this.state.n1) + 1) % 10).toString();
                        numero = this.state.n0.concat(valore, this.state.n2, this.state.n3);
                        return {'n1' : valore, validNumber: this.checkForUnique(numero)};
                    case 'n2':
                        valore = ((parseInt(this.state.n2) + 1) % 10).toString();
                        numero = this.state.n0.concat(this.state.n1, valore, this.state.n3);
                        return {'n2' : valore, validNumber: this.checkForUnique(numero)};
                    case 'n3':
                        valore = ((parseInt(this.state.n3) + 1) % 10).toString();
                        numero = this.state.n0.concat(this.state.n1, this.state.n2, valore);
                        return {'n3' : valore, validNumber: this.checkForUnique(numero)};
                    default:
                }
            }
        });
    }

    changeNumberHandler = (event, id) => {
        //console.log('nome', event.target.name);
        const valore = event.target.value;
        let numero = '';
        switch (event.target.name) {
            case 'n0':
                numero = valore.concat(this.state.n1, this.state.n2, this.state.n3);
                this.setState({n0: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n1':
                numero = this.state.n0.concat(valore, this.state.n2, this.state.n3);
                this.setState({n1: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n2':
                numero = this.state.n0.concat(this.state.n1, valore, this.state.n3);
                this.setState({n2: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n3':
                numero = this.state.n0.concat(this.state.n1, this.state.n2, valore);
                this.setState({n3: valore, validNumber: this.checkForUnique(numero)});
                break;
            default:
        }
    }

    changeColorHandler = (id) => {
        console.log('nchangeColorHandlerome', id);
        const valore = id;
        let numero = '';
        switch (this.state.currPos) {
            case 'n0':
                numero = valore.concat(this.state.n1, this.state.n2, this.state.n3);
                this.setState({n0: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n1':
                numero = this.state.n0.concat(valore, this.state.n2, this.state.n3);
                this.setState({n1: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n2':
                numero = this.state.n0.concat(this.state.n1, valore, this.state.n3);
                this.setState({n2: valore, validNumber: this.checkForUnique(numero)});
                break;
            case 'n3':
                numero = this.state.n0.concat(this.state.n1, this.state.n2, valore);
                this.setState({n3: valore, validNumber: this.checkForUnique(numero)});
                break;
            default:
                return null;
        }
    }

    showVictoryCancelHandler = () => {
        this.setState({showVictory: false});
    }

    showVictoryContinueHandler = () => {
        alert('Manca il routing per la nuova partita!');
    }
    render () {
        const number = this.state.n0.concat(this.state.n1, this.state.n2, this.state.n3);
        
        return (
          <Aux>              
              <Modal show={this.state.showVictory} modalClosed={this.showVictoryCancelHandler}>
                <h3>Hai vinto!!</h3>
                <Button clicked={this.showVictoryCancelHandler} btnType={"Danger"}>CHIUDI</Button>
                <Button clicked={this.showVictoryContinueHandler} btnType={"Success"}>NUOVA PARTITA</Button>
              </Modal>

              <Board
                tentatives={this.state.tentatives} 
                changeNum={this.changeNumberHandler}
                colorClicked={this.changeColorHandler}
                checkNum={this.checkGuessHandler}
                number={number} 
                solved={this.state.solved}
                validNumber={this.state.validNumber}
                currPos={this.state.currPos}
                selectPos={this.selectPositionHandler}
                showNumber={this.state.showNumber} />
          </Aux>
         );
    }
}

export default SbTable;
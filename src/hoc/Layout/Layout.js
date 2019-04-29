import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showHelp: false
    }
    
    hideHelpHandler = () => {
        this.setState({showHelp: false});
    }

    showHelpHandler = () => {
        this.setState({showHelp: true});
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return{ showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render() {
        return (
            <Aux>
                <Modal show={this.state.showHelp} modalClosed={this.hideHelpHandler}>
                    <h3>Strike and Bull</h3>
                    <p>Scopo del gioco è indovinare una combinazione di 4 colori differenti selezionati a caso da un insieme
                        di 10 colori.</p>
                    <p>Ad ogni tentativo ricevi una risposta che contiene tanti pallini neri quanti sono i colori nella posizione esatta e 
                        tanti pallini bianchi quanti sono i colori presenti, ma non nella posizione esatta.</p>
                    <Button clicked={this.hideHelpHandler} btnType={"Success"}>CHIUDI</Button>
                </Modal>
                <Toolbar showHelp={this.showHelpHandler} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler}
                    showHelp={this.showHelpHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
    
        );
    }
}

export default Layout;
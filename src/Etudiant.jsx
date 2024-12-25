import React, { Component } from "react";

class Etudiant extends Component{
    constructor(props){
        super(props);
        this.state = {
            nom:'Fatima zahra',
            note: 15
        }
    }

    changeState = () => {
        this.setState({note : 18})
    }

    render(){
        return(
            <>
                <h1>Hi I am a class Component</h1>
                <p>Hello I'm {this.state.nom}</p>
                <p>Votre note est: {this.state.note}</p>
                <button onClick={this.changeState}>Changer</button>
            </>
        )
    }
}

export default Etudiant;
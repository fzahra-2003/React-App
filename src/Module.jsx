import React, { Component } from 'react'

export default class Module extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <>
            <ul>
                <li>Nom: {this.props.nom}</li>
                <li>Category: {this.props.category}</li>
                <li>Coefficient: {this.props.coefficient}</li>
            </ul>
        </>
    )
    }
}

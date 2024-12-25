import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    //Http Request
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({users: result}))
    }

    render() {
        return (
        <div>
            <h1>List users from API</h1>
            {this.state.users.map((user,index) => {
                return (
                    <>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                        <hr />
                    </>
                )
            })}
        </div>
        )
    }
}

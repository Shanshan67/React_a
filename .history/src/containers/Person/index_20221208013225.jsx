import React, { Component } from 'react'

export default class Person extends Component {
    addPerson = (e) => {
         
    };
    render() {
    return (
        <div>
            <input ref={c=>this.nameNode=c} type='text' placeholder='name' />
            <input ref={c=>this.ageNode=c} type='text' placeholder='age' />
            <button onClick={this.addPerson}>add</button>
            <ul>
                <li></li>
            </ul>
        </div>
    )
    }
}

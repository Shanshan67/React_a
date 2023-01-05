import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Person extends Component {
    addPerson = () => {
        const name =this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
    };

    render() {
    return (
        <div>
            <h2>person Component</h2>
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

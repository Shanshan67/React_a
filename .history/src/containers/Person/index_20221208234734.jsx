import React, { Component } from 'react'
import { connect } from "react-redux"
import {} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const {value} = this.nameNode
        const {name} = this.nameNode 
    }

    render() {
    return (
        <div>
            <input ref={c=>this.nameNode=c} type='text' placeholder='name'/>
            <input ref={c=>this.ageNode=c} type='text' placeholder='age'/>
            <button onClick={this.addPerson}>add</button>
            <ul>
                <li>dai</li>
            </ul>
        </div>
    )
    }
}

export default connect(
    state => ({:state}),
    {
        jia:createIncrementAction,
    }
)(Person)
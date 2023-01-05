import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from "react-redux"
import {} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
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
    state => ({yiduiren:state.rens}),
    {
        jia:createIncrementAction,
    }
)(Person)
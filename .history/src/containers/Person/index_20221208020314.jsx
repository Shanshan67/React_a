import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name =this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.jiaYiRen(personObj)
        this.nameNode.value =''
        this.ageNode.value =''
    };

    render() {
    return (
        <div>
            <h2>person Component</h2>
            <input ref={c=>this.nameNode=c} type='text' placeholder='name' />
            <input ref={c=>this.ageNode=c} type='text' placeholder='age' />
            <button onClick={this.addPerson}>add</button>
            <ul>
                {
                    this.props.yiduiren.map((p)=>{
                        return <li key={p.id}>{p.name}---{p.age} </li>
                    })
                }
            </ul>
        </div>
    )
    }
}

export default connect(
    state=>({yiduiren:state.rens}),
    {
        jiaYiRen:createAddPersonAction,
    }
)(Person)

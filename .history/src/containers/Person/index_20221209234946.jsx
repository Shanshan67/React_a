import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.keyName.value
        const age = this.keyAge.value
        const personObj={id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.keyName.value=''
        this.keyAge.value=''
    }
  render() {
    return (
      <div>
        <h2>person Component,together:{this.props.count} </h2>
        <input ref={c=>this.keyName=c} type='text' placeholder='name' />
        <input ref={c=>this.keyAge=c} type='text' placeholder='age' />
        <button onClick={this.addPerson}>add</button>
        <ul>
            {
                this.props.person.map((p) => {
                    return <li key={p.id}>{p.name}--{p.age} </li>
                })
            }
        </ul>
      </div>
    )
  }
}
export default connect(
    state=>({person:state.person,count:state.count}),
    {addPerson}
)(Person)
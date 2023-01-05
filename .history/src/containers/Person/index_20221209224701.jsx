import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const {value:name} = this.keyName
    const {value:age} = this.keyAge
    const personObj ={id:nanoid(),name,age}
    this.props.addPerson(personObj)
    name=''
    age=''
  }
  render() {
    return (
      <div>
        <h1>person component,together:{this.props.count} </h1>
        <input ref={c=>this.keyName=c} type='text' placeholder='name'/>
        <input ref={c=>this.keyAge=c} type='text' placeholder='age'/>
        <button onClick={this.addPerson}>add</button>
        <ul>
          {
            this.props.person.map((p) => {
              return <li key={p.id}>{p.name}--{p.age}</li>
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
import { connect } from 'react-redux' 
import React, { Component } from 'react'
import {addPerson} from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
  addPerson = () => {
    const personObj ={id:nanoid(),name:this.keyName.value, age:this.keyAge.value}
    this.props.addPerson(personObj)
    this.keyName.value=''
    this.keyAge.value=''
  }
  render() {
    const {person}=this.props
    return (
      <div>
        <h2>person Component,total number:{this.props.count} </h2>
        <div>
          <input ref={c=>this.keyName=c} type="text" placeholder='name'/>
          <input ref={c=>this.keyAge=c} type="text" placeholder='age'/>
          <button onClick={this.addPerson}>add</button>
        </div>
        <div>
          <ul>
            {
              person.map((p) => {
                return <li key={p.id}>{p.name}--{p.age} </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default connect(
  state=>({person:state.person,count:state.count}),
  {addPerson}
)(Person)

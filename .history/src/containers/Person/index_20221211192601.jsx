import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const personObj ={id:nanoid(),name:this.keyName.value,age:this.keyAge.value}
        this.props.addPerson(personObj)
        this.keyName.value=''
        this.keyAge.value=''
    }
  render() {
    return (
      <div>
        <h2>person Component,sum{this.props.count}</h2>
        <div>
            <input type="text" placeholder='Name' ref={c=>this.keyName=c}/>
            <input type="text" placeholder='Age' ref={c=>this.keyAge=c}/>
            <button onClick={this.addPerson}>add</button>
        </div>
        <ul>
            {
                this.props.person.map((p) => {
                    return <li key={p.id} >{p.name}--{p.age} </li>
                })
            }
        </ul>
      </div>
    )
  }
}
export default connect(
    state=>({count:state.count,person:state.person}),
    {addPerson}
)(Person)
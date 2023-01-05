import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const userObj={id:nanoid(),name:this.keyName.value,age:this.keyAge.value}
        this.props.addPerson(userObj)
        this.keyAge.value=''
        this.keyName.value=''
    }
  render() {
    return (
      <div>
        <h2>person Component,count number:{this.props.count} </h2>
        <div>
            <input ref={c=>this.keyName=c} type="text" placeholder='name' />
            <input ref={c=>this.keyAge=c} type="text" placeholder='age' />
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
    state=>({person:state.person,count:state.count}),
    {addPerson}
)(Person)
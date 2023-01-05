import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

  render() {
    return (
      <div>
        <h2>person Component,together:{this.props.count} </h2>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='age' />
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
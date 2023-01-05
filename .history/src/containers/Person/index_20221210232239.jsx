import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
        <h2>person Component,count number:{this.props.count} </h2>
        <div>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='age' />
            <button>add</button>
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
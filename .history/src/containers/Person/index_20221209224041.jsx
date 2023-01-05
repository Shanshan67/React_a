import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
        <h1>person component,together:{this.props.count} </h1>
        <input type='text' placeholder='name'/>
        <input type='text' placeholder='age'/>
        <button>add</button>
        <ul>
          {
            this.props.person.map((p) => {
              return 
               
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
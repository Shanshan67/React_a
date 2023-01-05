import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {
  render() {
    //const {users} = this.state <List users={users}/>
    return (
      <div>
        <Count/>
      </div>
    )
  }
}

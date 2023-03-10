import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  

  updateAppState =(stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    //const {users} = this.state <List users={users}/>
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}

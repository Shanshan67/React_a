import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search saveUsers={this.updateAppState} />
        <List users={users} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false
  }

  saveUsers = (users) => {
     this.setState({ users  });
  }

  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    )
  }
}

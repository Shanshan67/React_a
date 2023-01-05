import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  addUsers = (userObj) => {
    this.setState(userObj);
  }
  render() {
    return (
      <div>
        <Search addUsers={this.addUsers} />
        <List {...this.state} />
      </div>
    )
  }
}


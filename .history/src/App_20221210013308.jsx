import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  findUsers = (stateObj) => {
    this.setState({ ...this.state})
  }

  render() {
    return (
      <div>
        <Search findUsers={this.findUsers} />
        <List {this.state} />
      </div>
    )
  }
}


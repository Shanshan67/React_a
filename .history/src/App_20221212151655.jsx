import React, { Component } from 'react'
import {}
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
  state={
    persons:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  updateState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}


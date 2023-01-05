import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    persons:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  unpdateState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    
    return (
      <div>
        <Search unpdateState={this.unpdateState} />
        <List {...this.state}/>
      </div>
    )
  }
}


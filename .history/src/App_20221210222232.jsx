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

  addSearch = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div>
        <Search addSearch={this.addSearch} />
        <List {...this.state}/>
      </div>
    )
  }
}


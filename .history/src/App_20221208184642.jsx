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

  

  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
  render() {
    //const {users} = this.state <List users={users}/>
    return (
      <div className="container">
        <About/>
        <Home/>
      </div>
    )
  }
}

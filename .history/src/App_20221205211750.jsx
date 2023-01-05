import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {todos:[
    {id:'001', name:'food', done:true},
    {id:'002', name:'sleep', done:true},
    {id:'003', name:'code', done:false}]}
  render() {
    const 
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={this.state.todos/>
          <Footer />
        </div>
  </div>
    )
  }
}

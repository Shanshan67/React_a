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

  a = (data)=>{
    console.log('app', data)
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header a={this.a} />
          <List todos={todos}/>
          <Footer />
        </div>
  </div>
    )
  }
}

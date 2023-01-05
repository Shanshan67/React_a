import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {todos:[
    {id:'001',name:'food',done:true},
    {id:'002',name:'sleep',done:true},
    {id:'003',name:'code',done:false},
  ]}

  render() {
    //const todos = this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header/>
            <List todos={this.state.todos}/>
            <Footer/>
          </div>
        </div>
    )
  }
}

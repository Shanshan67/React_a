import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {todos:[
    {id:'001',name:'food',done:false},
    {id:'002',name:'sleep',done:false},
    {id:'003',name:'code',done:true},
  ]}

  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header/>
            <List/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}


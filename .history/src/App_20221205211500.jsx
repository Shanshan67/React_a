import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  render() {
    state = {todos:[
      {id:'001', name:'chifan', done:true}]}
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
  </div>
    )
  }
}

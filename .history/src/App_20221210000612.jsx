import React, { Component } from 'react'
import Header from './components/Header'
import List from './containers/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <List/>
        <Footer/>
      </div>
    )
  }
}


import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  findSearch = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route/>
            <Route/>
          </Routes>
        </BrowserRouter>
        <Search findSearch={this.findSearch} />
        <List {...this.state} />
      </div>
    )
  }
}


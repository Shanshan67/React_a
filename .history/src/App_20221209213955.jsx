import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './containers/Count'
import Search from './containers/Search'
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
            <Route path='/' element={<Search findSearch={this.findSearch} />} />
            <Route path='/list' element={<List {...this.state} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


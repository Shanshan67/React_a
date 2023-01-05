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

  findUsers = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search findUsers={this.findUsers} />} />
            <Route path='/list' element={<List {...this.state} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


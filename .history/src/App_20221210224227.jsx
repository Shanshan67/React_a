import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  addSearch = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search addSearch={this.addSearch} />} />
          <Route path='/list' element={<List {...this.state}/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}


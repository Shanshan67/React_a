import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    persons:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  unpdateState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search unpdateState={this.unpdateState} />} />
            <Route path='/list' element={<List {...this.state}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


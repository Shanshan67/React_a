import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'//引入
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  finduser = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search finduser={this.finduser} />} />
            <Route path='/list' element={<List {...this.state} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


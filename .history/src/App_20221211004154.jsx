import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  addUsers = (userObj) => {
    this.setState(userObj);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search addUsers={this.addUsers} />} />
            <Route path='/list' element={<List {...this.state} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


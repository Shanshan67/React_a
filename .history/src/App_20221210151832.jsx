import React, { Component } from 'react'
import Count from './containers/Count'
import Search from './containers/Search'
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


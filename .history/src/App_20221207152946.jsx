import React, { Component } from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
  render() {
    //const {users} = this.state <List users={users}/>
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              <BrowserRouter>
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              </BrowserRouter>
            </div>
          </div> 
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

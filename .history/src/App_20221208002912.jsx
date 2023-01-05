import React, { Component } from 'react'
import Count from './containers/Count'
import store 

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state={todos:[
    {id:'01',name:'code',done:false},
    {id:'02',name:'food',done:true},
  ]}

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos= [todoObj,...todos]
    this.setState({ todos:newTodos  });
  }
  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} />
        <Footer todos={todos} />
      </div>
    )
  }
}


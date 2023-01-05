import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state={todos:[
    {id:'001',name:'food',done:false},
    {id:'002',name:'sleep',done:false},
    {id:'003',name:'code',done:true},
  ]}

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({ todos:newTodos  })
  }

  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if(todo.id===id){
        return {...todo,done}
      }
      else{
        return todo
      }
    })
    this.setState({ todos:newTodos  })
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} />
        <Footer todos={todos} />
      </div>
    )
  }
}


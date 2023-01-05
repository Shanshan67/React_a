import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Search'
import './App.css'

export default class App extends Component {
  state={todos:[
    {id:'001',name:'food',done:false},
    {id:'002',name:'code',done:false},
    {id:'003',name:'sleep',done:true},
  ]}

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({ todos:newTodos  })
  }

  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id===id){
        return {...todoObj,done}
      }else{return todoObj}
    })
    this.setState({ todos:newTodos  })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id!==id
    })
    this.setState({ todos:newTodos  })
  }

  checkAllTodos = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    this.setState({ todos:newTodos  })
  }

  clearAllTodo = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos:newTodos  })
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllTodo={this.clearAllTodo} />
      </div>
    )
  }
}


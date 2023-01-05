import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {todos:[
    {id:'001',name:'food',done:true},
    {id:'002',name:'sleep',done:true},
    {id:'003',name:'code',done:false},
  ]}

  addToDo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({ todos:newTodos  })
  }

  changeTodo = (id,done) => {
    const {todos} = this.state
    const newTodos =todos.map((todoObj) => {
      if(todoObj.id===id){
        return {...todoObj,done}
      }else{return todoObj}
    })
    this.setState({ todos:newTodos  })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos =todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos:newTodos  })
  }

  checkAllTodo = () => {
     
  }

  render() {
    const {todos} = this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addToDo={this.addToDo} />
            <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} />
          </div>
        </div>
    )
  }
}

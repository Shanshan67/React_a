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
    this.setState({ todos:newTodos  })
  }

  checkTodo = (id,done) => {
    const {todos} = this.state
    const newTodos= todos.map((todoObj) => {
      if(todoObj===id){
        return {...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({ todos:newTodos  })
  }

  deleteTodo= (id) => {
    const {todos} = this.state
    const newTodos= todos.filter((todoObj) => {
      return todoObj.id !==id
    })
    this.setState({ todos:newTodos  })
  }

  clearTodosDone 
  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} clearTodosDone={this.clearTodosDone} />
      </div>
    )
  }
}


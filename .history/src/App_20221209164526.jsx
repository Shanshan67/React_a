import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state={todos:[
    {id:'001',name:'food',done:false},
    {id:'002',name:'sleep',done:false},
    {id:'003',name:'code',done:true},
  ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos] 
    this.setState({ todos:newTodos  });
    console.log(todos)
  }

  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
       if(todoObj.id===id){
        return {...todoObj,done}
       }
       else{return todoObj}
    })
    this.setState({ todos:newTodos  })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
       if(todoObj.id!==id){
        return todoObj
       }
    })
    this.setState({ todos:newTodos  })
  }

  checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
        return {...todoObj,done}
    })
    this.setState({ todos:newTodos  })
  }

  clearDone= () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
       if(!todoObj.done){
        return todoObj
       }
    })
    this.setState({ todos:newTodos  })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAll={this.checkAll} clearDone={this.clearDone} />
        </div>
      </div>
    )
  }
}


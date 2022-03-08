import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Play Video Games',
          id: 1528817084359,
          completed: false
        },
        {
          name: 'Watch Some YouTube',
          id: 1528817084355,
          completed: false
        }
      ]
    }
  }



  handleAdd = (name) =>{
   
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state, todos: [...this.state.todos, newTodo]
    })
  }

  handleToggle = (clickedId) =>{
   

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=>{
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }


  // handleHide = () =>{
  //   this.setState({
  //     ...this.state, 
  //     todos: this.state.todos.map(todo=>{
  //      if(todo.completed === true){
  //        return{
  //          ...todo
  //        }
  //      }
  //     })
  //   })
  // }

  render() {
    // const {todos} = this.state;
    return (
      <div>
       <TodoList todos = {this.state.todos} handleToggle = {this.handleToggle}/>
       <Form handleAdd = {this.handleAdd}/>
       <button onClick={this.handleHide}>Hide Completed</button>
      </div>
    )
  }
}

import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084359,
          completed: false
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <ul>
          {todos.map((task)=>{
            return(<li key={task.id}>{task.name} {task.completed? <span>✅</span> : <span></span>}</li>)
          })}
        </ul>
      </div>
    )
  }
}

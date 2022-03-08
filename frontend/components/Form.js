import React from 'react'

export default class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      input: ''
    }

  }

    handleSubmit = event =>{
      event.preventDefault();
      
      this.props.handleAdd(this.state.input)
  
    }
  
    handleChange = event =>{
      this.setState({
        ...this.state, input:event.target.value
      })
    }
 
  render() {

    // console.log(this.state.input)
    return (
      <div>
       <form>
         <input type='text' onChange={this.handleChange}/>
         <button onClick={this.handleSubmit}>Submit</button>
       </form>
       
       
      </div>
    )
  }
}

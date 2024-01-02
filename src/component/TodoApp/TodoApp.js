import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items :[],
  };
  handleChange = (event) => {
    this.setState({
      input : event.target.value
    });
  };
  storeItems = (event)=>{
    event.preventDefault();
    const {input} = this.state;

    this.setState({
      items:[...this.state.items,input],
      input:""
    })
  }
  deleteItems = (index)=>{
   this.state.items.splice(index,1);
   this.setState({
    items:[...this.state.items]
   })
  }
  render() {
    const {input,items}= this.state;
    return (
      <div className="todo-container">
        <h1>TODO APP</h1>
        <form action="" onSubmit={this.storeItems}>
        <div className="input-section">
          <input className="input-col" type="text" value={input} onChange={this.handleChange} placeholder="add new tasks..." />
          <button className="add-btn">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        </form>
        <ul>
          {items.map((data,index)=>(

          <li key={index}>
            <span className="item-text">{data}</span>
            <span className="delete-btn">
            <i class="fa-solid fa-trash" onClick={()=>this.deleteItems(index)}></i>
            </span>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <h1>Todo App</h1>
        <div className="input-section">
           <input className='input-col' type="text"/>
           <button className='add-btn'>Add</button>
        </div>
        <ul>
            <li>items</li>
            <li>items</li>
            <li>items</li>
        </ul>
      </div>
    )
  }
}

export default TodoApp;

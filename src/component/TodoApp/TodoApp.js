import React, { Component } from "react";
import "./TodoApp.css";
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded';
import QueueRoundedIcon from '@mui/icons-material/QueueRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export class TodoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <h1>TODO APP <span className="menubar"><MenuRoundedIcon/></span></h1>
        <div className="input-section">
          <input className="input-col" type="text" />
          <button className="add-btn"><QueueRoundedIcon/></button>
        </div>
        <ul>
          <li>
            <span className="item-text">Item 1</span>
            <span className="delete-btn">
              <LibraryAddCheckRoundedIcon />
            </span>
          </li>
          <li>
            <span className="item-text">Item 2</span>
            <span className="delete-btn">
              <LibraryAddCheckRoundedIcon />
            </span>
          </li>
          <li>
            <span className="item-text">Item 3</span>
            <span className="delete-btn">
              <LibraryAddCheckRoundedIcon />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoApp;

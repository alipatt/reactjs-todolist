import React, { Component } from "react";
import { Link } from "react-router-dom";
const divStyle = {
  color: "black",
  cursor: "pointer",
};
export default class TodoMenu extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li
            className="list-group-item"
            onClick={() => {
              this.props.status(0);
            }}
          >
            <Link to="/todolist" style={divStyle}>
              to do
            </Link>
          </li>
          <li
            className="list-group-item"
            onClick={() => {
              this.props.status(1);
            }}
          >
            <Link to="/todolist" style={divStyle}>
              did it
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/addtodo" style={divStyle}>
              add to todolist
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

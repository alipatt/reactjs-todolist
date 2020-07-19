import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <center>
              <h1 className="display-6">Todo List</h1>
              <p className="lead">This is app for your notes</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

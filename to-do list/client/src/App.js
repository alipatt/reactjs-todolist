import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoMenu from "./TodoMenu";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      currentlist: [],
    };
  }

  componentDidMount() {
    let list = [];
    axios.get(`http://localhost:5000/api/list`).then((res) => {
      const data = res.data;

      data.forEach((el) => {
        list.push({
          id: el.id,
          todo: el.todo,
          status: el.status,
        });
      });
      this.setState({ todolist: list, currentlist: list });
    });
  }

  status = (status = 0) => {
    var list = [];
    var all = this.state.todolist;

    if (status === 0) {
      this.setState({ currentlist: all });
    } else {
      this.state.todolist.forEach((element) => {
        if (element.status === status) {
          list.push(element);
        }
      });
      this.setState({ currentlist: list });
    }
  };

  render() {
    return (
      <Router>
        <Container className="py-4">
          <Row>
            <Col xs="12" sm="3" md="3" lg="3">
              <Route
                exact
                render={(props) => <TodoMenu status={this.status} />}
              />
            </Col>
            <Col xs="12" sm="9" md="9" lg="9">
              <Switch>
                <Route
                  path="/todolist"
                  render={(props) => (
                    <TodoList currentlist={this.state.currentlist} />
                  )}
                />
                <Route path="/addtodo" component={AddTodo} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

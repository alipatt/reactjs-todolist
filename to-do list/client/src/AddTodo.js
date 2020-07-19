import React, { Component } from "react";
import axios from "axios";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
export default class AddTodo extends Component {
  state = {
    todo: "",
    date: undefined
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
    console.log(value);
  };

  handleSumbit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/addtodo", this.state)
      .then(() => console.log("sending"))
      .catch((err) => {
        console.error(err);
      });
    this.props.history.push("/todolist");

    window.location.reload();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSumbit}>
          <FormGroup>
            <Label for="todo">To Do:</Label>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="add to do"
              onChange={this.handleChange}
              required
            ></Input>
          </FormGroup>
          <FormGroup>
            <Input type="date" id="date" name="date" onChange={this.handleChange} required></Input>
          </FormGroup>

          <Button type="submit" color="info" onClick={this.handleSumbit}>
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

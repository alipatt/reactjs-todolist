import React, { Component } from "react";
import axios from "axios";

export default class TodoList extends Component {
  delete(el) {
    axios
      .post("http://localhost:5000/api/delete", el)
      .then(() => console.log("sending"))
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  }
  didit(el) {
    axios
      .post("http://localhost:5000/api/didit", el)
      .then(() => console.log("sending"))
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Todo</th>
              <th scope="col">Status</th>
              <th scope="col">Buttons</th>
            </tr>
          </thead>

          <tbody>
            {this.props.currentlist.map((el) => (
              <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.todo}</td>
                <td>{el.status === 1 ? "did it" : "todo"}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.delete(el)}
                  >
                    sil
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.didit(el)}
                    disabled={el.status === 1 ? true : false}
                  >
                    yapıldı
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

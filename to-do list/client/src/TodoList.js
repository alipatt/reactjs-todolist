import React, { Component } from "react";
import axios from "axios";

const tdStyle={
  textDecoration : "line-through"
}

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
  todo(el){
    if(el.status===1){
      return<td style={tdStyle}>{el.todo}</td>
    }
    else{
      return<td >{el.todo}</td>
    }
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
              <th scope="col">End Date</th>
              <th scope="col">Buttons</th>
            </tr>
          </thead>

          <tbody>
            {this.props.currentlist.map((el) => (
              <tr key={el.id}>
                <th scope="row">{el.id}</th>
                {this.todo(el)}
                <td>{el.status === 1 ? "DONE" : "todo"}</td>
                <td>{el.date}</td>
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

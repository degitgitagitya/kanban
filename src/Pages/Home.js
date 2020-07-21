import React, { Component } from "react";

import Container from "../Components/Container";
import Task from "../Components/Task";

export default class Home extends Component {
  state = {
    tasks: [
      {
        issueId: 1,
        title: "Improve accuracy of voice-to-text model",
        assignee: "July",
        startDate: "2020-06-21",
        endDate: "2020-06-22",
        tags: "Backlog",
        team: "Research",
      },
      {
        issueId: 2,
        title: "Create API",
        assignee: "Jane",
        startDate: "2020-06-21",
        endDate: "2020-06-23",
        tags: "Backlog",
        team: "Backend",
      },
      {
        issueId: 3,
        title: "Create Database",
        assignee: "Steven",
        startDate: "2020-06-21",
        endDate: "2020-06-23",
        tags: "Todo",
        team: "Backend",
      },
      {
        issueId: 4,
        title: "Create Design",
        assignee: "Steven",
        startDate: "2020-06-21",
        endDate: "2020-06-23",
        tags: "Done",
        team: "Design",
      },
    ],
  };

  render() {
    return (
      <Container>
        <div className="row mt-5 ml-1">
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Backlog</h5>
                <button className="custom-button-add shadow-sm">
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.tags === "Backlog")
                .map((task) => {
                  return <Task key={task.issueId} task={task}></Task>;
                })}
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>To Do</h5>
                <button className="custom-button-add shadow-sm">
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.tags === "Todo")
                .map((task) => {
                  return <Task key={task.issueId} task={task}></Task>;
                })}
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Done</h5>
                <button className="custom-button-add shadow-sm">
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.tags === "Done")
                .map((task) => {
                  return <Task key={task.issueId} task={task}></Task>;
                })}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

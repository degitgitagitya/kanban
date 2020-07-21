import React, { Component } from "react";
import ReactModal from "react-modal";

import Container from "../Components/Container";
import Task from "../Components/Task";

import MEMBERS from "../Data/Member";

const TAGS = [
  {
    id: 1,
    name: "Research",
  },
  {
    id: 2,
    name: "Backend",
  },
  {
    id: 3,
    name: "Design",
  },
];

export default class Home extends Component {
  state = {
    tasks: [
      {
        issueId: 1,
        title: "Improve accuracy of voice-to-text model",
        assignee: "July",
        startDate: "2020-06-21",
        endDate: "2020-06-22",
        status: "Backlog",
        tags: "Research",
      },
      {
        issueId: 2,
        title: "Create API",
        assignee: "Jane",
        startDate: "2020-06-21",
        endDate: "2020-06-23",
        status: "Backlog",
        tags: "Backend",
      },
      {
        issueId: 3,
        title: "Create Database",
        assignee: "Steven",
        startDate: "2020-06-21",
        endDate: "2020-06-23",
        status: "Todo",
        tags: "Backend",
      },
      {
        issueId: 4,
        title: "Create Design",
        assignee: "Steven",
        startDate: "2020-06-21",
        endDate: "2020-06-26",
        status: "Done",
        tags: "Design",
      },
    ],
    showModal: false,
    inputTitle: "",
    inputTags: "Research",
    inputAssignee: "Jane",
    inputStartDate: "",
    inputEndDate: "",
    inputStatus: "",
  };

  onChangeInputTitle = (event) => {
    this.setState({
      inputTitle: event.target.value,
    });
  };

  onChangeInputTags = (event) => {
    this.setState({
      inputTags: event.target.value,
    });
  };

  onChangeInputAssignee = (event) => {
    this.setState({
      inputAssignee: event.target.value,
    });
  };

  onChangeInputStartDate = (event) => {
    this.setState({
      inputStartDate: event.target.value,
    });
  };

  onChangeInputEndDate = (event) => {
    this.setState({
      inputEndDate: event.target.value,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      inputTitle: "",
      inputTags: "",
      inputAssignee: "",
      inputStartDate: "",
      inputEndDate: "",
      inputStatus: "",
    });
  };

  handleOpenModal = (args) => {
    this.setState({
      showModal: true,
      inputStatus: args,
    });
  };

  handleAddButton = () => {
    let tasks = this.state.tasks;
    let newTask = {
      issueId: tasks[tasks.length - 1] + 1,
      title: this.state.inputTitle,
      assignee: this.state.inputAssignee,
      startDate: this.state.inputStartDate,
      endDate: this.state.inputEndDate,
      status: this.state.inputStatus,
      tags: this.state.inputTags,
    };

    tasks.push(newTask);

    this.setState({
      tasks: tasks,
      showModal: false,
      inputTitle: "",
      inputTags: "",
      inputAssignee: "",
      inputStartDate: "",
      inputEndDate: "",
      inputStatus: "",
    });
  };

  render() {
    return (
      <Container>
        {/* Modal */}

        <ReactModal
          isOpen={this.state.showModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
        >
          <h5>New Task</h5>
          <hr />
          <div className="mb-3">
            <div>Title</div>
            <input
              onChange={this.onChangeInputTitle}
              value={this.state.inputTitle}
              placeholder="Title"
              className="form-control"
              type="text"
            />
          </div>

          <div className="mb-3">
            <div>Tags</div>
            <select
              onChange={this.onChangeInputTags}
              value={this.state.inputTags}
              className="form-control"
            >
              {TAGS.map((tag) => {
                return (
                  <option value={tag.name} key={tag.id}>
                    {tag.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <div>Assignee</div>
            <select
              onChange={this.onChangeInputAssignee}
              value={this.state.inputAssignee}
              className="form-control"
            >
              {MEMBERS.map((member) => {
                return (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <div>Start Date</div>
            <input
              onChange={this.onChangeInputStartDate}
              value={this.state.inputStartDate}
              placeholder="Start Date"
              className="form-control"
              type="date"
            />
          </div>

          <div className="mb-3">
            <div>End Date</div>
            <input
              onChange={this.onChangeInputEndDate}
              value={this.state.inputEndDate}
              placeholder="End Date"
              className="form-control"
              type="date"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="custom-modal-button-add shadow-sm"
              onClick={this.handleAddButton}
            >
              Add
            </button>

            <button
              className="custom-modal-button-cancel shadow-sm"
              onClick={this.handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </ReactModal>

        {/* Content */}
        <div className="row mt-5 ml-1">
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Backlog</h5>
                <button
                  onClick={() => {
                    this.handleOpenModal("Backlog");
                  }}
                  className="custom-button-add shadow-sm"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.status === "Backlog")
                .map((task) => {
                  return <Task key={task.issueId} task={task}></Task>;
                })}
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>To Do</h5>
                <button
                  onClick={() => {
                    this.handleOpenModal("Todo");
                  }}
                  className="custom-button-add shadow-sm"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.status === "Todo")
                .map((task) => {
                  return <Task key={task.issueId} task={task}></Task>;
                })}
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Done</h5>
                <button
                  onClick={() => {
                    this.handleOpenModal("Done");
                  }}
                  className="custom-button-add shadow-sm"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              {this.state.tasks
                .filter((task) => task.status === "Done")
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

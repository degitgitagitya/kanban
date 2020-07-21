import React, { Component } from "react";

export default class Task extends Component {
  render() {
    const { title, team, assignee, endDate } = this.props.task;
    const x = new Date(endDate);
    const y = new Date();
    const diff = x.getDate() - y.getDate();
    return (
      <div className="home-card-content mb-2">
        <div className="font-weight-bold mb-2">{title}</div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="mr-2 initial-name font-weight-bold">
              {assignee.slice(0, 1)}
            </div>
            <div
              className={
                team === "Design"
                  ? "bg-design font-weight-bold bg-label"
                  : team === "Backend"
                  ? "bg-backend font-weight-bold bg-label"
                  : "bg-research font-weight-bold bg-label"
              }
            >
              {team}
            </div>
          </div>
          <div className="font-weight-bold text-secondary">
            {diff + ` `} Days
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import "./SideBar.css";

import TEAMS from "../Data/Team";

const DATA_MENU = [
  {
    no: 1,
    name: "Home",
  },
  {
    no: 2,
    name: "My Task",
  },
];

const MenuContent = (props) => {
  return <div className="sidebar-content">{props.data.name}</div>;
};

const TeamContent = (props) => {
  return <div className="sidebar-content">{props.data.name}</div>;
};

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="sidebar-search"
              placeholder="Search"
            />
            <i className="fas fa-search ml-3 text-light sidebar-search-icon"></i>
          </div>
        </div>
        <div className="sidebar-user mt-3">
          <div className="row">
            <div className="col-3">
              <img
                src="https://thumbs.dreamstime.com/b/female-artist-work-woman-isolated-34069637.jpg"
                className="sidebar-icon-user"
                alt="img"
              />
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-12 sidebar-user-name">John Doe</div>
              </div>
              <div className="row">
                <div className="col-12 sidebar-user-status">Designer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex sidebar-track">
          <div>
            <div>372</div>
            <div className="sidebar-secondary-text">Completed Tasks</div>
          </div>
          <div className="ml-3">
            <div>11</div>
            <div className="sidebar-secondary-text">Open Tasks</div>
          </div>
        </div>
        <hr className="sidebar-line" />
        <div className="sidebar-content-header">MENU</div>

        {DATA_MENU.map((data) => {
          return <MenuContent key={data.no} data={data}></MenuContent>;
        })}

        <div className="sidebar-content">
          <div className="d-flex">
            <div>Notification</div>
            <div className="sidebar-bubble shadow">3</div>
          </div>
        </div>
        <hr className="sidebar-line" />
        <div className="sidebar-content-header">TEAMS</div>

        {TEAMS.map((data) => {
          return <TeamContent key={data.id} data={data}></TeamContent>;
        })}

        <div className="side-content-add-team shadow">
          <div className="d-flex align-items-center">
            <i className="fas fa-plus mr-2"></i>
            <div>Add a Team</div>
          </div>
        </div>
      </div>
    );
  }
}

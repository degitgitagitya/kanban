import React from "react";

import SideBar from "./SideBar";
import "./Container.css";

import MEMBERS from "../Data/Member";

const Container = (props) => {
  const { children } = props;
  return (
    <div>
      <SideBar />
      <div className="content-container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://images.glints.com/unsafe/960x0/glints-dashboard.s3.amazonaws.com/company-logo/fe4a42cdf679416125b7727e3bf46add.jpg"
              alt="icon-prosa"
              className="container-icon"
            />
            <h4 className="ml-2 mr-4">Kanban Prosa</h4>
            <i className="fas fa-ellipsis-h container-more"></i>
          </div>
          <div className="d-flex align-items-center">
            <div>
              {MEMBERS.slice(0, 3).map((data) => {
                return (
                  <img
                    alt={data.id}
                    key={data.id}
                    className="container-thumbnail shadow-sm"
                    src={data.photo}
                  ></img>
                );
              })}
            </div>
            <div className="container-member-label">
              {MEMBERS.length + " "}Members
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Container;

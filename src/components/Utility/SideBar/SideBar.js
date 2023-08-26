import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideMenu = ({ setPageTitle }) => {
  return (
    <div className="side_menu">
      <div className="sections">
        <div className="section__link">
          <NavLink
            className="nav__link"
            onClick={() => setPageTitle("Profile")}
            to={"profile"}
          >
            Profile
          </NavLink>
        </div>
        <div className="section__link">
          <NavLink
            className="nav__link"
            onClick={() => setPageTitle("Posts")}
            to={"posts"}
          >
            Posts
          </NavLink>
        </div>
        <div className="section__link">
          <NavLink
            className="nav__link"
            onClick={() => setPageTitle("Gallery")}
            to={"gallery"}
          >
            Gallery
          </NavLink>
        </div>
        <div className="section__link">
          <NavLink
            className="nav__link"
            onClick={() => setPageTitle("Todo")}
            to={"todo"}
          >
            ToDO
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

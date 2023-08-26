import React, { useContext, useState } from "react";
import SideMenu from "../Utility/SideBar/SideBar";
import Navbar from "../Utility/NavBar/NavBar";
import Chat from "../Utility/Chat/Chat";
import { UserContext } from "../../Context";
import { Outlet } from "react-router-dom";
import "./HomePage.css";


const HomePage = () => {
  const { GetUser, userAccounts } = useContext(UserContext);
  const selectedUser = GetUser();

  let [pageTitle, setPageTitle] = useState("Profile");

  return (
    <div className="home_page">
      <SideMenu setPageTitle={setPageTitle} />
      <div className="user_container">
        <Navbar selectedUser={selectedUser} pageTitle={pageTitle} />
        <div className="profile_details">
          {/*  User Pages */}
          <Outlet context={selectedUser} />
        </div>
        <Chat userAccounts={userAccounts} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default HomePage;

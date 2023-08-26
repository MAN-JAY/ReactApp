import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import "./NavBar.css"

const Navbar = ({ pageTitle, selectedUser }) => {
  const { userAccounts } = useContext(UserContext);

  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  // generate random users to show under profile menu
  const randomNumber = () => Math.floor(Math.random() * userAccounts.length);

  const firstUser = userAccounts[randomNumber()];
  const secondUser = userAccounts[randomNumber()];

  return (
    <div className="user__header">
      {selectedUser && (
        <>
          <p className="pagetitle">{pageTitle}</p>
          <div className="user__profile" onClick={handleClick}>
            <img
              className="user__image"
              src={selectedUser.profilepicture}
              alt="profile_picture"
            />
            <p className="menu__name">{selectedUser.name}</p>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="dialog__menu"
          >
            <div className="menu">
              <img
                className="dialog__picture"
                src={selectedUser.profilepicture}
                alt=""
              />
              <p className="dialog__name">{selectedUser.name}</p>
              <p className="dialog__email">{selectedUser.email}</p>

              <div className="dialog__user__list">
                <Link
                  className="dialog__user__link"
                  to={`/user/${firstUser.id}/profile`}
                  onClick={handleClose}
                >
                  <img src={firstUser.profilepicture} alt="" />
                  <p>{firstUser.name}</p>
                </Link>

                <Link
                  className="dialog__user__link"
                  to={`/user/${secondUser.id}/profile`}
                  onClick={handleClose}
                >
                  <img src={secondUser.profilepicture} alt="" />
                  <p>{secondUser.name}</p>
                </Link>
              </div>
              <Link to="/" className="sign__out">
                Sign out
              </Link>
            </div>
          </Menu>
        </>
      )}
    </div>
  );
};

export default Navbar;

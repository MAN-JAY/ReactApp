import React from "react";
import { Link } from "react-router-dom";

const GetProfile = ({ userDetails }) => {
  const { id, name, profilepicture } = userDetails;
  return (
    <>
      <img src={profilepicture} alt="user_profile_pic" />
      <Link to={`/user/${id}/profile`}>
        <h5>{name}</h5>
      </Link>
    </>
  );
};

export default GetProfile;

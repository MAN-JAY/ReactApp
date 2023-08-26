import React, { useContext } from "react";
import GetProfiles from "../UserProfileCard/UserProfileCard";
import "./LandingPage.css";
import { UserContext } from "../../Context";

const LandingPage = () => {
  // destructure users list from context
  const { userAccounts } = useContext(UserContext);

  return (
    <div className="landing_page">
      <div className="landing_page_card">
        <h3>Select an account</h3>
        <div className="Profile_card">
          {userAccounts.length === 0 ? (
            <p>No users Found</p>
          ) : (
            userAccounts.map((user) => {
              return (
                <div className="user" key={user.id}>
                  <GetProfiles userDetails={user} userAccounts={userAccounts} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

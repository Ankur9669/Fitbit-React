import React, { useEffect } from "react";
import { Navbar, Footer, useUser, useToast, Link } from "./index";
import "./userpage.css";

const UserPage = () => {
  const { user } = useUser();
  const { email, firstName, lastName } = user.user;
  const { showToast } = useToast();

  const handleDisableButtonClick = () => {
    showToast("Coming Soon...", "INFO");
  };
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile" aria-label="profile-page">
          <div className="profile-btn-container">
            <div className="profile-btn-wrapper">
              <button className="button button-primary">Profile</button>
              <Link to="/addresses" className="button button-outline-primary">
                Addresses
              </Link>
              <Link to="/orders" className="button button-outline-primary">
                Orders
              </Link>
            </div>
          </div>
          <div className="profile-page-content user-profile-container">
            <div className="user-image-container">
              <img
                src="images/avatar.svg"
                className="avatar avatar-lg-size"
                alt="avatar"
              />
            </div>
            <div className="user-info-container">
              <div className="user-info-item">
                <p className="font-medium-large weight-semi-bold">Name</p>
                <p className="font-medium-large">{`${firstName} ${lastName}`}</p>
              </div>
              <div className="user-info-item">
                <p className="font-medium-large weight-semi-bold">Email</p>
                <p className="font-medium-large">{email}</p>
              </div>
              <div className="user-info-item">
                <p className="font-medium-large weight-semi-bold">Phone</p>
                <p className="font-medium-large">**********</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;

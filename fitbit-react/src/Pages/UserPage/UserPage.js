import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/toast-context";
import "./userpage.css";
const UserPage = () => {
  const { user } = useUser();
  const { email, firstName, lastName } = user.user;
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
    }
  }, [user.isUserLoggedIn]);

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
              <button
                className="button button-outline-primary"
                onClick={handleDisableButtonClick}
              >
                Addresses
              </button>
            </div>
            <div className="profile-btn-wrapper">
              <button
                className="button button-outline-primary"
                onClick={handleDisableButtonClick}
              >
                Orders
              </button>
              <button
                className="button button-outline-primary"
                onClick={handleDisableButtonClick}
              >
                Setting
              </button>
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

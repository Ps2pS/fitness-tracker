import React from "react";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

const UserNavbar = ({ setCurrentUser }) => {
  const Navigate = useNavigate();

  // Functionality to Logout from user panel

  const logoutFrom = () => {
    toast.success("Logout Successful", {
      position: "top-center",
      autoClose: 5000,
    });
    Navigate("/");
    setCurrentUser("home");
  };

  // To scroll to top of the page after Clicking on any link

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light  navigation-bar">
          <div class="container-fluid">
            <div>
              <Link class="navbar-brand" to="/" onClick={scrollToTop}>
                <img
                  className="nav-logo"
                  src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
                  alt="caishipolychem "
                />
                <span style={{ fontWeight: "600" }}>FitTracker</span>
              </Link>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse navmen justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link class="nav-link active" onClick={scrollToTop} to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    onClick={scrollToTop}
                    to="/bmi-calculator"
                  >
                    BMI
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" onClick={scrollToTop} to="/profile">
                    Profile
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link active" onClick={logoutFrom} to="/">
                    Logout
                  </Link>
                </li>

                <li class="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserNavbar;

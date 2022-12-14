import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import logoutImg from "../../Assests/svg/logout.svg";

export function Logout() {
  return (
    <>
      <section className="auth-container p-5">
        <div className="pb-2 logout-icon-wrapper">
          <img src={logoutImg} alt="logout" />
        </div>
        <div className="alert color-bg-success mb-2">
          <span>
            <FaCheckCircle />
          </span>
          You have successfully logged out
        </div>
        <div className="back-to-home-link">
          <Link to="/" className="nav-links">
            Go Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

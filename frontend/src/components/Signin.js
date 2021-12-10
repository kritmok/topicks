import React from "react";
import "../../App.css";
import "./Signin.css";

export default function Signin() {
  return (
    <div className="sign-in-section">
      <div className="sign-in-container">
        <h2 className="sign-in-msg">Sign in to your account</h2>
        <br />
        <form method="post">
          <p className="sign-in-email-text">Email</p>
          <input
            className="sign-in-emai"
            type="email"
            name="email"
            required="required"
          />
          <p className="sign-in-password-text"> Password</p>
          <input
            className="sign-in-password"
            type="password"
            name="password"
            required="required"
          />

          <a href="/" className="sign-in-link">
            <button className="sign-in-button">Continue</button>
          </a>
        </form>
      </div>
    </div>
  );
}

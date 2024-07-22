import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="text-container">
        <h1 className="title-header">
          welcome to yourBank empowering your <span>financial journey</span>
        </h1>
        <div className="description-header-container">
          <p className="description-header">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
        </div>
      </div>
      <div className="header-btn-container">
        
      </div>
    </div>
  );
}

export default Header;

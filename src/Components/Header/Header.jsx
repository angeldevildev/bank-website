import React from "react";
import "./Header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="text-container">
        <h1 className="title-header" style={{ fontFamily: 'LexendRegular' }}>
          welcome to yourBank empowering your <span className="financial-j-text">financial journey</span>
        </h1>
        <div className="description-header-container">
          <p className="description-header" style={{ fontFamily: 'LexendLight' }}>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
        </div>
        <div className="header-btn-container">
          <Button 
            text="Open Account" 
            borderRadius="82px" 
            fontFamily="LexendRegular" 
            padding="10px" 
            margin="20px" 
            backColor="#CAFF33" 
            border='none'
            color='#000'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

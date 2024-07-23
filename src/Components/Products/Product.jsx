import React from "react";
import "./Products.css";
import Button from "../Button/Button";
import logo1 from "./accounts.png";
import logo2 from "./savings.png";
import logo3 from "./leans.png";

function ProductBox({ title, description, logo }) {
  return (
    <div className="productBox">
      <img src={logo} alt={`${title} logo`} className="product-logo" />
      <h2 style={{ fontFamily: 'LexendMedium' }} className="title-products">{title}</h2>
      <p style={{ fontFamily: 'LexendLight' }} className="description-products">{description}</p>
    </div>
  );
}

function Product() {
  return (
    <div className="products">
      <div className="product-text-container">
        <div className="products-text">
          <h1 style={{ fontFamily: "LexendRegular" }}>
            our <span>products</span>
          </h1>
          <div className="products-start-description-container">
            <p style={{ fontFamily: "LexendLight" }}>
              Discover a range of comprehensive and customizable banking products
              at YourBank, designed to suit your unique financial needs and
              aspirations
            </p>
          </div>
        </div>
      </div>
      <div className="product-boxs-container">
        <div className="first-box checking-accounts">
          <ProductBox
            logo={logo1}
            title="Checking Accounts"
            description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
          />
        </div>
        <div className="second-box savings-accounts">
          <ProductBox
            logo={logo2}
            title="Savings Accounts"
            description="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
          />
        </div>
        <div className="third-box leans-mortgages">
          <ProductBox
            logo={logo3}
            title="Leans and Mortgages"
            description="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
export { ProductBox };

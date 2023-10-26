import React from "react";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Layout>
      <div className="container-xxl bd-gutter">
        <div className="col-md-8 mx-auto text-center">
          <img
            src="/Piggybank.jpg"
            width="200"
            height="165"
            alt="Income Manager"
            className="d-none d-sm-block mx-auto mb-3"
          />
          <h1 className="mb-3 fw-semibold lh-1">
            Manage your income and expenses all in one place
          </h1>
          <p className="lead mb-4">
            Effortlessly track your finances with our Income and Expense
            Manager. Take control of your financial life with this versatile
            tool designed to help you manage your income and expenses with ease.
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-primary" onClick={handleLoginClick}>
            Login
          </button>
          <button className="btn btn-primary" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

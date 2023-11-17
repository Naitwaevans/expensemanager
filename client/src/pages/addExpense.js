import React from "react";
import Layout from "../components/dashboardLayout";

const Dashboard = () => {
  return (
    <Layout>
      <form className="row g-3">
        <div className="col-12">
          <label htmlFor="inputDate" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" id="inputDate" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAmount" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" id="inputAmount" />
        </div>
        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="inputDescription" />
        </div>
        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "300px" }}
          >
            Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Dashboard;

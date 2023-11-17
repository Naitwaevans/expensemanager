import React, { useState, useEffect } from "react";
import Layout from "../components/dashboardLayout";
import { fetchIndividualIncomes } from "../api/auth";

const Dashboard = () => {
  const [income, setIncome] = useState([]);
  const [error, setError] = useState(null);
  const handleIncomeClick = () => {
    window.location.href = "http://localhost:3000/add-income";
  };

  useEffect(() => {
    // Fetch the income data when the component mounts
    async function fetchIncomes() {
      try {
        const response = await fetchIndividualIncomes(
          localStorage.getItem("user_id")
        );

        if (response.data && response.data.length > 0) {
          setIncome(response.data);
        } else {
          setError("No Income found"); // Set an error message
        }
      } catch (error) {
        setError(error);
      }
    }

    fetchIncomes();
  }, []);

  return (
    <Layout>
      <div className="card-body">
        <h5 className="card-title">Incomes</h5>
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div>
            <div className="text-right">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={handleIncomeClick}
              >
                Add New Income
              </button>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {income.map((incomeItem, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{incomeItem.amount}</td>
                    <td>{incomeItem.description}</td>
                    <td>{incomeItem.date}</td>
                    <td>
                      <button type="button" className="btn btn-warning">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;

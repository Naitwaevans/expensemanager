import React, { useState, useEffect } from "react";
import Layout from "../components/dashboardLayout";
import { fetchIndividualExpenses } from "../api/auth";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const handleAddExpenseClick = () => {
    window.location.href = "http://localhost:3000/add-expense";
  };

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await fetchIndividualExpenses(
          localStorage.getItem("user_id")
        );

        if (response.data && response.data.length > 0) {
          setExpenses(response.data);
        } else {
          console.log("No expenses found");
        }
      } catch (error) {
        setError(
          "An error occurred, but no specific error message is available."
        );
      }
    }

    fetchExpenses();
  }, []);

  return (
    <Layout>
      <div className="card-body">
        <h5 className="card-title">Expenses</h5>
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Display error message if error is not null */}
        <div className="text-right">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleAddExpenseClick}
          >
            Add New Expense
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
            {expenses.map((expense, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
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
    </Layout>
  );
};

export default Dashboard;

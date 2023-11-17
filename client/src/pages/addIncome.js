import React, { useState } from "react";
import Layout from "../components/dashboardLayout";
import { addIncome } from "../api/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authslice";

const AddIncome = () => {
  const dispatch = useDispatch();

  const getUserId = async () => {
    try {
      const res = await dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user_id", res.data.id);
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const [values, setValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting data:", values);
      const { data } = await addIncome(values);
      console.log("Response data:", data);

      setSuccess(data.message);
      setError("");
      setValues({ amount: "", date: "", description: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Layout>
      <form onSubmit={onSubmit} className="row g-3">
        <input type="hidden" name="user_id" value={getUserId} />
        <div className="col-12">
          <label htmlFor="inputDate" className="form-label">
            Date
          </label>
          <input
            onChange={onChange}
            type="date"
            className="form-control"
            id="inputDate"
            name="date"
            value={values.date}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAmount" className="form-label">
            Amount
          </label>
          <input
            onChange={onChange}
            type="number"
            className="form-control"
            id="inputAmount"
            name="amount"
            value={values.amount}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="inputDescription"
            name="description"
            value={values.description}
          />
        </div>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
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

export default AddIncome;

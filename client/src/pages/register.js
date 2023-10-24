import { useState } from "react";
import Layout from "../components/layout";
import { onRegistration } from "../api/auth";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting data:", values);
      const { data } = await onRegistration(values);
      console.log("Response data:", data);

      setError("");
      setSuccess(data.message);
      setValues({ name: "", email: "", password: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Layout>
      <form onSubmit={onSubmit} className="container mt-3">
        <h1>Register</h1>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={values.name}
            placeholder="Enter your name here"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            placeholder="Enter email here"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={values.password}
            placeholder="password"
            required
          />
        </div>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Register;

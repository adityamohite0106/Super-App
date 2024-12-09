import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    tandcond: false,
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    mobile: false,
    username: false,
    tandcond: false,
  });

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    // Destructure form data
    const { name, email, mobile, username, tandcond } = formData;

    // Reset errors before validation
    let hasError = false; // Track if there are validation errors
    setError({
      name: false,
      email: false,
      mobile: false,
      username: false,
      tandcond: false,
    });

    // Validate fields
    if (name.trim().length === 0) {
      setError((prevState) => ({ ...prevState, name: true }));
      hasError = true;
    }
    if (username.trim().length === 0) {
      setError((prevState) => ({ ...prevState, username: true }));
      hasError = true;
    }
    if (email.trim().length === 0) {
      setError((prevState) => ({ ...prevState, email: true }));
      hasError = true;
    }
    if (mobile.trim().length === 0) {
      setError((prevState) => ({ ...prevState, mobile: true }));
      hasError = true;
    }
    if (!tandcond) {
      setError((prevState) => ({ ...prevState, tandcond: true }));
      hasError = true;
    }

    // Stop form submission if there are errors
    if (hasError) {
      return;
    }

    // If no errors, proceed to save data and navigate
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/movies");
  }

  function changHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="container">
      <div className="heading_signup">
        <h1>Super app</h1>
        <p>Create your new account</p>
      </div>
      <div className="form_data">
        <form className="form_field" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={changHandler}
          />
          {error.name && (
            <p style={{ color: "red", fontSize: "12px" }}>Name is required</p>
          )}
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={changHandler}
          />
          {error.username && (
            <p style={{ color: "red", fontSize: "12px" }}>
              Username is required
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changHandler}
          />
          {error.email && (
            <p style={{ color: "red", fontSize: "12px" }}>Email is required</p>
          )}
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={changHandler}
          />
          {error.mobile && (
            <p style={{ color: "red", fontSize: "12px" }}>Mobile is required</p>
          )}
          <input
            type="checkbox"
            className="check"
            name="tandcond"
            checked={formData.tandcond}
            onChange={changHandler}
          />
          <span className="check_box">
            Share my registration data with Superapp
          </span>
          {error.tandcond && (
            <p style={{ color: "red", fontSize: "12px" }}>
              You must accept the terms and conditions
            </p>
          )}
          <button type="submit" className="submit">
            SIGN UP
          </button>
          <p>
            By clicking on Sign up, you agree to Superapp
            <span className="condition"> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares, and
            protects your personal data please head to Superapp{" "}
            <span className="condition">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

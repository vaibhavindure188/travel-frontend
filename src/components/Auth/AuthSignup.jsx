import "./Auth.css";
import { useAuth, useAlert } from "../../context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils";
import { signupHandler } from "../../services";
import { useState } from "react";

export const AuthSignup = () => {
  const { username, email, password, number, confirmPassword, authDispatch } = useAuth();
  const { setAlert } = useAlert();

  // Local state for validation
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const handleNumberChange = (event) => {
    authDispatch({
      type: "NUMBER",
      payload: event.target.value,
    });
    const isValid = validateNumber(event.target.value);
    setIsNumberValid(isValid);
    if (isValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      setAlert("Invalid Number", "error");
    }
  };

  const handleNameChange = (event) => {
    authDispatch({
      type: "NAME",
      payload: event.target.value,
    });
    const isValid = validateName(event.target.value);
    setIsNameValid(isValid);
    if (isValid) {
      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      setAlert("Invalid Name", "error");
    }
  };

  const handleEmailChange = (event) => {
    authDispatch({
      type: "EMAIL",
      payload: event.target.value,
    });
    const isValid = validateEmail(event.target.value);
    setIsEmailValid(isValid);
    if (isValid) {
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      setAlert("Invalid Email", "error");
    }
  };

  const handlePasswordChange = (event) => {
    authDispatch({
      type: "PASSWORD",
      payload: event.target.value,
    });
    const isValid = validatePassword(event.target.value);
    setIsPasswordValid(isValid);
    if (isValid) {
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      setAlert("Invalid Password", "error");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    authDispatch({
      type: "CONFIRM_PASSWORD",
      payload: event.target.value,
    });
    const isValid = event.target.value === password;
    setIsConfirmPasswordValid(isValid);
    if (isValid) {
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      setAlert("Passwords do not match", "error");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      signupHandler(username, number, email, password, setAlert);
      authDispatch({
        type: "CLEAR_USER_DATA",
      });
    } else {
      setAlert("Please fill all fields correctly", "error");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            value={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name <span className="asterisk">*</span>{" "}
          </label>
          <input
            value={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>{" "}
          </label>
          <input
            value={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            value={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            value={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { url, setToken } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };


  return (
    <div className="login-popup">
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have and account ?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;

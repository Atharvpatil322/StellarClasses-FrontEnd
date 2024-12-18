import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// The Link component provided by react-router-dom is used to create links between different routes in your application.

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:3000/api/v1/user/login", values);
      // The reload() method of the Location interface reloads the current URL, like the Refresh button.
      // It will reload the site 2nd time automatically. (its a temporary solution)
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfull!");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>

        <div className="button-container">
          <button className="btn" type="submit">
            Login
          </button>
          <Link to="/register" className="m-2">
            Not a user? Register here
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;

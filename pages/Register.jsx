


import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, notification , message} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { CheckCircleOutlined } from "@ant-design/icons"; // Import checkmark icon
import Login from "./Login";


const Register = () => {
  console.log("Register component rendered");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      console.log(values);
      const res = await axios.post("http://localhost:3000/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered Successfully!",5);
   
        navigate("/login");
      } else {
  
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error.message);
 
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Contact Number" name="contactNo">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
         
          <div className="button-container">
            <button className="btn" type="submit">
              Register
            </button>
            <Link to="/login" className="m-2">
              Already a user? Login here
            </Link>
          </div>
          
        </Form>
      </div>
    </>
  );
};

export default Register;

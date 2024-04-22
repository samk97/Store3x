import React, { useState } from "react";
import Alert from "../UI/Alert";
import { login } from "../../utils/Auth"; // Import the login function

const Login = ({ toggleForm, onLoginSuccess }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit called");
    try {
      const formData = {
        email: email,
        password: password,
      };
      const response = await login(formData);
      if (response.success) {
        setShowAlert(true);
        onLoginSuccess();
      } else {
        setShowAlert(true); // Show failure alert
      }
      console.log(response.error);
      setAlertMsg(response.error);
    } catch (error) {
      setShowAlert(true);
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
      <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
      <p className="text-gray-600 mb-6 text-sm">welcome back customer</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-200"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-200"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-red-700 focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-red-700">
            Forgot password
          </a>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
          >
            Login
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={toggleForm}
          className="text-red-700 focus:outline-none"
        >
          Register now
        </button>
      </p>

      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType="fail"
          message={alertMsg}
        />
      )}
    </>
  );
};

export default Login;

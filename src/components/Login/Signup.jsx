import React, { useState } from "react";
import { signup } from "../../utils/Auth";
import Alert from "../UI/Alert";

const Signup = ({ toggleForm,isSeller }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  const [alertMsgType, setAlertMsgType] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fullName = e.target.elements.name.value;
      const [fname, ...lnameArr] = fullName.split(" ");
      const lname = lnameArr.join(" ");
                
      const password1 = e.target.elements.password.value;
      const password2 = e.target.elements.confirm.value;

      if (password1 !== password2) {
        setAlertMsg("Passwords do not match.");
        setShowAlert(true);
        return;
      }
      

      const email = e.target.elements.email.value;
      if (!fullName || !email || !password1) {
        setAlertMsg("Please fill in all details.");
        setShowAlert(true);
        return;
      }

      if (!validateEmail(email)) {
        setAlertMsg("Please enter a valid email address.");
        setShowAlert(true);
        return;
      }
  
      const formData = {
        fname: fname,
        lname: lname,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        user_type : isSeller ? 2 : 1,
      };
  
      const response = await signup(formData);
      setShowAlert(true);
      console.log(response);
  
      if (response.success) {
        setAlertMsg(response.message);
        setAlertMsgType("success");
      } else {
         console.log(response.message)
        setAlertMsg(response.message);
        setAlertMsgType("fail");
      }
    } catch (error) {
      setAlertMsg(error.message);
      setAlertMsgType("fail"); 
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
      <p className="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-400"
              placeholder="*******"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="text-gray-600 mb-2 block">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-700 placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-red-700 focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              I have read and agree to the{" "}
              <a href="#" className="text-red-700">
                terms &amp; conditions
              </a>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-red-700 border border-red-700 rounded hover:bg-transparent hover:text-red-700 transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>
      

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <button
          onClick={toggleForm}
          className="text-red-700 focus:outline-none"
        >
          Login now
        </button>
      </p>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          messageType={alertMsgType}
          message={alertMsg}
        />
      )}
    </>
  );
};

export default Signup;

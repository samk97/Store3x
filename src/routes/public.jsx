import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PopupWindow from "../components/Login/PopupWindow";
import { fetchUser } from "../utils/Auth";

const PublicRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginSucc, setLoginSucc] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClosePopup = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const checkUser = fetchUser();
    if (checkUser) {
      setLoggedIn(true);
      setUser(checkUser);
      console.log(user);
    } else {
      setLoggedIn(false);
      setUser(null);
      setShowLogin(true); 
    }
  }, [loginSucc]);

  

  return (
    <>
      {loggedIn ? (
        <Outlet />
      ) : (
        <PopupWindow
          show={showLogin}
          setLoginSucc={setLoginSucc}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default PublicRoutes;

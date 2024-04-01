import axios from "axios";

const URL_LOGIN =
  process.env.REACT_APP_Login_API_URL || "http://localhost:4001/login/";
const URL_LOGOUT =
  process.env.REACT_APP_Logout_API_URL || "http://localhost:4001/logout/";

export const login = async (formData) => {
  try {
    const response = await axios.post(URL_LOGIN, formData, {
      withCredentials: true,
    });

    if (response.status === 200) {
      return { success: true, response };
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { success: false, error: error.response.data.message };
    } else {
      return {
        success: false,
        error: "Connection error. Please try again later !!!!",
      };
    }
  }
};

export const logout = async () => {
  try {
    await axios.post(URL_LOGOUT, {}, { withCredentials: true });
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "/";
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const fetchUser = () => {
  const token = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("jwt="));
  if (token) {
    const tokenValue = token.split("=")[1];
    const decodedToken = JSON.parse(atob(tokenValue.split(".")[1]));
    return decodedToken;
  }
  return "";
};

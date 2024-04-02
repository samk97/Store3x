import axios from "axios";

const URL_AUTH = process.env.Auth_API_URL || "http://localhost:4001";

export const login = async (formData) => {
  try {
    const response = await axios.post(`${URL_AUTH}/login`, formData, {
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

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${URL_AUTH}/signup`, formData);
    if (response.status === 201) {
      return { success: true, message: response.data.message };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { success: false, message: error.response.data.message };
    } else {
      return {
        success: false,
        message: "Connection error. Please try again later !!!!",
      };
    }
  }
};


export const logout = async () => {
  try {
    await axios.post(`${URL_AUTH}/logout`, {}, { withCredentials: true });
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

// api.tsx
import axios from "axios";

const API_URL = "http://localhost:3000";

let userRole: string | null = null;

export const registerUser = async (userData: {
  username: string;
  password: string;
  email: string;
}) => {
  const userDataWithRole = { ...userData, role: "user" };

  const response = await axios.post(`${API_URL}/users`, userDataWithRole);
  return response.data;
};

export const loginUser = async (credentials: {
  username: string;
  password: string;
  role: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      params: credentials,
    });

    const user = response.data;
    console.log(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      userRole = user.username === "admin" ? "admin" : "user";
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("userRole", userRole);
      console.log("Role:", userRole);
      console.log("Is user:", user.role === "user");
    }
    return user;
  } catch (error) {
    console.log("Login error:", error);
    throw error;
  }
};
export const getUserRole = () => {
  return userRole;
};

// RegisterForm.tsx
import React, { useState } from "react";
import { registerUser } from "../../../api/user";

const Signup: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const userData = { username, password, email };
      const user = await registerUser(userData);
      // Do something with the registered user data, e.g., save to state or local storage
      console.log(user);
      setError("");
      alert("Đăng Kí Thành Công !");
      window.location.href="/home";
    } catch (error) {
      setError("Error registering user");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Signup;

import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const submit = async (e) => {
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log("once the user is authenticated === ");
    // const response = await fetch("login", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(username, password),
    // });

    // const result = await response.json();
    // localStorage.setItem("accessToken", result?.accessToken);
    // localStorage.setItem("refreshToken", result?.refreshToken);
    localStorage.setItem("accessToken", "rauthenticated");

    // console.log("Success:", result);
    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="username">Username</label>
        <input name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" minLength={8} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;

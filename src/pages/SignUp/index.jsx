import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function SignUp() {
  /*const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    login: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Fetch existing user data
    const existingData = JSON.parse(localStorage.getItem("usersData")) || [];

    // **Secure password handling is essential!**
    // This example uses a very basic hash, but you'd need a robust solution in a real app.
    const hashedPassword = userInput.password.toString(); // Replace with a secure hashing function

    // Store new user data
    localStorage.setItem(
      "usersData",
      JSON.stringify([
        ...existingData,
        {
          ...userInput,
          password: hashedPassword,
        },
      ])
    );

    setUserInput({ name: "", phone: "", login: "", password: "" });
  }*/
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    login: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("usersData"))
      ? JSON.parse(localStorage.getItem("usersData"))
      : [];
    console.log(data);
    localStorage.setItem(
      "usersData",
      JSON.stringify([...data, { ...userInput }])
    );
    setUserInput({ name: "", phone: "", login: "", password: "" });
  }
  return (
    <>
      <div className="container sign-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              className="signinput"
              value={userInput.name}
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
          <label htmlFor="">
            <input
              className="signinput"
              value={userInput.phone}
              type="text"
              placeholder="Phone Number"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </label>
          <label htmlFor="">
            <input
              className="signinput"
              value={userInput.login}
              type="text"
              placeholder="UserName"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, login: e.target.value }))
              }
            />
          </label>
          <label htmlFor="">
            <input
              className="signinput"
              value={userInput.password}
              type="text"
              placeholder="Password"
              onChange={(e) =>
                setUserInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <Link className="loginlink" to="/">
          Login
        </Link>
      </div>
    </>
  );
}

export default SignUp;

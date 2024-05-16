import React, { useRef } from "react";
import "./style.css";
function Login() {
  const username = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = username.current.value;
    let password = password.current.value;
    if (userName === "login20" && password === "login1234") {
      localStorage.setItem("user", true);
    } else {
      localStorage.setItem("user", false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  ref={username}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  ref={password}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/beb98df05a.js"
        crossOrigin="anonymous"
      ></script>{" "}
    </>
  );
}

export default Login;

/*import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./style.css";

function Login() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState("todos");

  useEffect(() => {
    if (loggedIn) {
      fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  }, [loggedIn, dataType]);

  const handleLogin = () => {
    // Implement login logic here
    setUser({ name: "John Doe" });
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setUser(null);
    setLoggedIn(false);
  };

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
  };

  const memoizedData = useMemo(() => {
    return data.map((item) => <li key={item.id}>{item.title}</li>);
  }, [data]);

  const memoizedHandleDataTypeChange = useCallback(handleDataTypeChange, []);

  return (
    <div>
      <h1>JSONPlaceholder Data Viewer</h1>

      {loggedIn ? (
        <>
          <select value={dataType} onChange={memoizedHandleDataTypeChange}>
            <option value="todos">Todos</option>
            <option value="posts">Posts</option>
            <option value="users">Users</option>
          </select>

          <ul>{memoizedData}</ul>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Sign Up</button>
        </>
      )}
    </div>
  );
}

export default Login;*/

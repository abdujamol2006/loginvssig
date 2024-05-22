import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

function Layout() {
  return (
    <>
      <header>
        <div className="container home-container">
          <Link to="/">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default Layout;

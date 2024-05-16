import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  /*const navigate = useNavigate();
  function Redirect() {
    let user = localStorage.getItem("user");
    if (user === "true") {
    } else {
    }
  }*/
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

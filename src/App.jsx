import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Tv from "./Components/Tv";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Details from "./Components/Details";

export default function App() {
  let navigae = useNavigate();
  useEffect(() => {
    decodeData();
    /* return () => {
      if (localStorage.getItem("Token")) {
        localStorage.removeItem("Token");
        localStorage.removeItem("TheName");
        setLoginD(null);
        setName(null);
        <Navigate to={"/login"} />;
      }
    };*/
  }, []);

  const [Name, setName] = useState(null);
  const [LoginD, setLoginD] = useState(null);
  function decodeData() {
    if (localStorage.getItem("Token")) {
      let encode = localStorage.getItem("Token");
      let Decode = jwtDecode(encode);
      let StName = localStorage.getItem("TheName");
      setName(StName);
      setLoginD(Decode);
    } else {
      setLoginD(null);
    }
  }
  function LogOut() {
    setLoginD(null);
    setName(null);
    localStorage.removeItem("Token");
    localStorage.removeItem("TheName");
    navigae("/login");
  }
  function ProectedRoute(props) {
    if (localStorage.getItem("Token") == null) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  }

  return (
    <div>
      <Navbar LoginD={LoginD} Name={Name} LogOut={LogOut} />
      <Routes>
        <Route
          path=""
          element={
            <ProectedRoute>
              <Home />
            </ProectedRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProectedRoute>
              <Home />
            </ProectedRoute>
          }
        />
        <Route
          path="details/:id"
          element={
            <ProectedRoute>
              <Details />
            </ProectedRoute>
          }
        />
        <Route
          path="movies"
          element={
            <ProectedRoute>
              <Movies />
            </ProectedRoute>
          }
        />
        <Route
          path="people"
          element={
            <ProectedRoute>
              <People />
            </ProectedRoute>
          }
        />
        <Route
          path="tv"
          element={
            <ProectedRoute>
              <Tv />
            </ProectedRoute>
          }
        />
        <Route path="login" element={<Login TeJWT={decodeData} />} />
        <Route path="register" element={<Register />} />
        <Route
          path="*"
          element={<h1 className=" text-center">Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

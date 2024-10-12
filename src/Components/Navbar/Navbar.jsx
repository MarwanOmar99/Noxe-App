import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Navbar({ LoginD, Name, LogOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="home">
              Noxe
            </Link>
            {LoginD != null && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="tv">
                    Tv
                  </Link>
                </li>
              </ul>
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {LoginD != null && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </Link>
                </li>
              )}
              {LoginD != null && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </Link>
                </li>
              )}
              {LoginD != null && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </Link>
                </li>
              )}
              {LoginD != null && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
                  </Link>
                </li>
              )}
              {LoginD == null && (
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="login">
                    Login
                  </Link>
                </li>
              )}
              {LoginD == null && (
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="register">
                    Register
                  </Link>
                </li>
              )}
              {Name != null && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    {Name}
                  </Link>
                </li>
              )}
              {LoginD != null && (
                <li className="nav-item my-2 ms-2 LogO" onClick={LogOut}>
                  LogOut
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

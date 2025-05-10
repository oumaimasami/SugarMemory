import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./sources/logo1.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid position-relative">
        {/* Burger menu toggle for small screens */}
        <button
          className="navbar-toggler position-absolute end-0 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo always centered */}
        <div className="navbar-brand mx-auto position-absolute start-50 translate-middle-x">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Full navbar collapsible content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          {/* Left side menu */}
          <ul className="navbar-nav ms-lg-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Les Saveurs
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/saveurs/dattes">
                    Dattes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/mignardise">
                    Mignardise
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/sable">
                    Sablé
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/sale">
                    Salé
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/sucre">
                    Sucrés
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/epicerie">
                    Épicerie Fine
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/zouza">
                    Zouza
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/ghrayba">
                    Ghrayba
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saveurs/gateau">
                    Gâteaux Personnalisés
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Menu">
                Menu
              </Link>
            </li>
          </ul>

          {/* Right side menu */}
          <ul className="navbar-nav me-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/maison">
                À Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./sources/logo1.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          {/* Left Side of Navbar */}
          <ul className="navbar-nav d-flex flex-row me-5">
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
                  <Link
                    className="dropdown-item"
                    produit="Dattes"
                    to="/saveurs/dattes"
                  >
                    Dattes
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="Mignardise"
                    to="/saveurs/mignardise"
                  >
                    Mignardise
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    produit="Sablé"
                    to="/saveurs/sable"
                  >
                    Sablé
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="Salé"
                    to="/saveurs/sale"
                  >
                    Salé
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    produit="Sucrés"
                    to="/saveurs/sucre"
                  >
                    Sucrés
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="Epicerie"
                    to="/saveurs/epicerie"
                  >
                    Epicerie Fine
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="Zouza"
                    to="/saveurs/zouza"
                  >
                    Zouza
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="Ghrayba"
                    to="/saveurs/ghrayba"
                  >
                    Ghrayba
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    produit="gateau"
                    to="/saveurs/gateau"
                  >
                    Gàteaux Personnalisés
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item me-3">
              <Link className="nav-link" to="/Menu">
                Menu
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <Link className="navbar-brand mx-4" to="/">
            <img
              className="logo"
              src={logo} // Replace with your logo's path
              alt="Logo"
            />
          </Link>

          {/* Right Side of Navbar */}
          <ul className="navbar-nav d-flex flex-row ms-5">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/maison">
                À Propos
              </Link>
            </li>
            <li className="nav-item me-3">
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

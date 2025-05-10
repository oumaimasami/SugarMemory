import React from "react";
import "./Footer.css";
import logo from "./sources/LOG.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-light text-dark pt-5 pb-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & Description */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <img
              src={logo}
              alt="Sugar Memories Logo"
              className="footer-logo mb-3"
            />
            <p className="footer-description">
              Sugar Memories By Saby est une invitation à savourer l’élégance et
              la tendresse sucrée, où chaque création raconte une histoire
              gourmande.
            </p>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h5 className="mb-3 footertitle">Contact</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i> Ariana, Tunisie
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> sugarmemories8@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +216 90 959 220
            </p>
            <p>
              <i className="fab fa-instagram me-2"></i> @sugar.memories.bysaby
            </p>
          </div>

          {/* (Optional) Links or more content */}
          <div className="col-12 col-lg-4 mb-4 text-md-start text-center">
            <h5 className="mb-3 footertitle">Navigation</h5>
            <p>
              <Link to="/menu" className="footer-link">
                Menu
              </Link>
            </p>

            <p>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </p>
            <p>
              <Link to="/maison" className="footer-link">
                À Propos
              </Link>
            </p>
            <p>
              <Link to="/saveurs" className="footer-link">
                Les Saveurs
              </Link>
            </p>
          </div>
        </div>

        <hr />
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Sugar Memories. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

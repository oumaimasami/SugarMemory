import React from "react";
import "./Footer.css";
import footerImage from "./sources/footer.png";

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <div className="footer-image-container">
        <img src={footerImage} alt="Footer" className="footer-image" />
        <div className="footer-text row ">
          <div className="col-md-3 ">
            <a
              href="https://www.facebook.com/saby.sho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook about-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/sugar.memories.bysaby/?fbclid=IwY2xjawH9swdleHRuA2FlbQIxMAABHSTigcPreU7o4K_DnfY4hvXYwHX0DmjiWGddW9qz64I69K0eFM-3LagPCQ_aem_XvKIrbsVvjRNMyq3OjS_Ww#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram about-icon"></i>
            </a>
            <a
              href="https://www.tiktok.com/@sugar.memories.by?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-tiktok about-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

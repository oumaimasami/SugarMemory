import React from "react";
import image3 from "./sources/products/brownies LOTUS.png";

export default function Produit({ title, description, image }) {
  return (
    <div className="card col-md-3 col-sm-6 p-3">
      <img src={image3} className="card-img-top Produit-image" alt="..." />
      <div className="card-body">
        <h5 className="Produit-title">{title}</h5>
        <p className="Produit-text">{description}</p>
      </div>
    </div>
  );
}

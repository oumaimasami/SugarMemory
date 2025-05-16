import React from "react";

export default function Produit({ title, price, image }) {
  return (
    <div className="card col-md-3 col-sm-6 p-3">
      <img src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt={title} />
      <div className="card-body">
        <h5 className="Produit-title">{title}</h5>
        <p className="Produit-text">{price} Dt</p>
      </div>
    </div>
  );
}

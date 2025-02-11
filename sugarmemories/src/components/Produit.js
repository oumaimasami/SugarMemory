import React from "react";

export default function Produit({ title, description, image }) {
  return (
    <div className="card col-md-3 col-sm-6 p-3">
      <img src={`http://localhost:5000${image}`} alt={title} />
      <div className="card-body">
        <h5 className="Produit-title">{title}</h5>
        <p className="Produit-text">{description}</p>
      </div>
    </div>
  );
}

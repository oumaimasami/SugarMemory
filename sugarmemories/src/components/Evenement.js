import React from "react";
import anniv from "./sources/anniv.png";
import Soutenance from "./sources/mariage.jpg";
import Thour from "./sources/thour2.jpg";
import Marriage from "./sources/Marriage1.jpg";

export default function Evenement() {
  return (
    <div className="row justify-content-center my-4 py-4 px-5">
      <h2 className="category">Nos Evenements</h2>
      <div className="card col-3 ">
        <img src={anniv} className="card-img-top image" alt="..." />
        <h5 className="card-title ">Anniversaire</h5>
      </div>
      <div className="card col-3">
        <img src={Marriage} className="card-img-top image" alt="..." />
        <h5 className="card-title ">Marriage</h5>
      </div>
      <div className="card col-3">
        <img src={Thour} className="card-img-top image" alt="..." />
        <h5 className="card-title ">Thour</h5>
      </div>
      <div className="card col-3">
        <img src={Soutenance} className="card-img-top image" alt="..." />
        <h5 className="card-title ">Soutenance</h5>
      </div>
    </div>
  );
}

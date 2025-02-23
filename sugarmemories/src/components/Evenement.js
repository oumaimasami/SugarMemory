import React from "react";
import anniv from "./sources/anniv.png";
import Soutenance from "./sources/mariage.jpg";
import Thour from "./sources/thour2.jpg";
import Marriage from "./sources/Marriage1.jpg";
import { Link } from "react-router-dom";

export default function Evenement() {
  return (
    <div className="row justify-content-center my-4 py-4 px-5">
      <h2 className="category">Nos Evenements</h2>
      <div className="card col-3 ">
        <Link to="/saveurs/gateau">
          <img src={anniv} className="card-img-top image" alt="..." />
          <h5 className="card-title ">Anniversaire</h5>
        </Link>
      </div>
      <div className="card col-3">
        <Link to="/saveurs/sable">
          <img src={Marriage} className="card-img-top image" alt="..." />
          <h5 className="card-title ">Marriage</h5>
        </Link>
      </div>
      <div className="card col-3">
        <Link to="/saveurs/mignardise">
          <img src={Thour} className="card-img-top image" alt="..." />
          <h5 className="card-title ">Thour</h5>
        </Link>
      </div>
      <div className="card col-3">
        <Link to="/saveurs/sale">
          <img src={Soutenance} className="card-img-top image" alt="..." />
          <h5 className="card-title ">Soutenance</h5>
        </Link>
      </div>
    </div>
  );
}

import React from "react";

export default function Quality() {
  return (
    <div className="row justify-content-center text-center my-4 py-4">
      <div className="col-md-3 col-xs-8 m-4 py-4 ">
        <i className="bi bi-gem my-2 icon"></i>
        <h3 className="my-2">Qualité supérieur</h3>
        <p className="my-2 icon-text">
          Nous vous offrons une qualité supérieure et un meilleur goût possible
        </p>
      </div>
      <div className="col-md-3 col-xs-8 m-4 py-4">
        <i class="bi bi-cash-coin icon"></i>
        <h3 className="my-2">Prix raisonnable</h3>
        <p className="my-2 icon-text">
          Nous vous garantissons le meilleur rapport qualité /prix sur le marché
          .
        </p>
      </div>
      <div className="col-md-3 col-xs-8 m-4 py-4">
        <i class="bi bi-truck icon"></i>
        <h3 className="my-2">Livraison a domicile</h3>
        <p className="my-2 icon-text">
          Nous assurons une livraison à domicile sur le grand tunis.
        </p>
      </div>
    </div>
  );
}

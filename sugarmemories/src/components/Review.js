import React from "react";
import order from "./sources/order.png";
import avis1 from "./sources/avis/Avis1.png";
import avis2 from "./sources/avis/Avis2.png";
import avis3 from "./sources/avis/Avis3.png";
import avis4 from "./sources/avis/Avis4.png";
import avis5 from "./sources/avis/Avis5.png";
import avis6 from "./sources/avis/Avis6.png";

export default function Review() {
  return (
    <div className="container mt-4 pt-3">
      <div className="row justify-content-center my-4 py-4">
        <div className="col-md-6 col-xs-12 no-space">
          <img className="review-image" src={order} alt="..." />
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide col-md-5 col-xs-12 no-space"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={avis1} className="d-block review-image " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={avis2} className="d-block review-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={avis3} className="d-block review-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={avis4} className="d-block review-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={avis5} className="d-block review-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={avis6} className="d-block review-image" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

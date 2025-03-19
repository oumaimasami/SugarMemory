import React from "react";

export default function Caraousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner cara">
        <div className="carousel-item active">
          <img
            src="caraousel4.jpg"
            className="d-block w-100 caraouselpic"
            alt="pic1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="caraousel5.jpg"
            className="d-block w-100 caraouselpic"
            alt="pic2"
          />
        </div>
        <div className="carousel-item">
          <img src="12.jpg" className="d-block w-100 caraouselpic" alt="pic5" />
        </div>
        <div className="carousel-item">
          <img
            src="caraousel2.png"
            className="d-block w-100 caraouselpic"
            alt="pic3"
          />
        </div>
      </div>
    </div>
  );
}

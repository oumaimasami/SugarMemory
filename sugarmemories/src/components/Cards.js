import React from "react";
import image3 from "./sources/cookies.jpg";
export default function Cards({ title, description, image }) {
  return (
    <div className="card col-3 m-3">
      <div className="m-3 ">
        <img src={image3} className="card-img-top image" alt="..." />
        <div className="card-body">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

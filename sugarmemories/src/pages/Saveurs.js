import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Produit from "../components/Produit";
import Sortingmenu from "../components/Sortingmenu";
import image from "../components/sources/2.jpg";

const initialBrownies = [
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
  { title: "Brownies Oreo", description: "5,000 Dt" },
  { title: "Brownies Lotus", description: "5,000 Dt" },
  { title: "Brownies Cake", description: "25,000 Dt" },
  { title: "Brownies Fekia", description: "5,000 Dt" },
  { title: "Cookies", description: "1,000 Dt" },
];

export default function Saveurs() {
  const { itemName } = useParams(); // Get the item name from the URL
  const [displayCount, setDisplayCount] = useState(9); // Default to showing 9 items
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [brownies] = useState(initialBrownies); // State for the list of brownies

  const totalPages = Math.ceil(brownies.length / displayCount); // Calculate total pages

  const handleDisplayChange = (count) => {
    setDisplayCount(count); // Update the number of items displayed
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update current page
    }
  };

  // Get the brownies for the current page
  const startIndex = (currentPage - 1) * displayCount;
  const displayedBrownies = brownies.slice(
    startIndex,
    startIndex + displayCount
  );

  return (
    <>
      <div className="maison-cover justify-content-center text-center">
        <img className="maison-image py-5" src={image} alt="..." />
        <p className="maison-title">Nos Saveurs</p>
      </div>
      <div className="container Saveurs my-5">
        <div className="sort row my-5">
          <p className="affichage col-md-2 col-sm-12">
            <b>Afficher : </b>{" "}
            <span
              className={`affiche nine ${displayCount === 9 ? "active" : ""} `}
              onClick={() => handleDisplayChange(9)}
            >
              9
            </span>{" "}
            <span className="affiche">/</span>{" "}
            <span
              className={`affiche twenty-four ${
                displayCount === 24 ? "active" : ""
              }`}
              onClick={() => handleDisplayChange(24)}
            >
              24
            </span>{" "}
            <span className="affiche">/</span>{" "}
            <span
              className={`affiche thirty-six ${
                displayCount === 36 ? "active" : ""
              }`}
              onClick={() => handleDisplayChange(36)}
            >
              36
            </span>
          </p>

          <Sortingmenu />
        </div>
        <div className="row justify-content-center">
          {displayedBrownies.map((item, index) => (
            <Produit
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="pagination mt-4 d-flex justify-content-center">
          <button
            className="btn btn-light mx-1"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`btn mx-1 ${
                currentPage === index + 1 ? "buttoncolor" : "btn-light"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-light mx-1"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}

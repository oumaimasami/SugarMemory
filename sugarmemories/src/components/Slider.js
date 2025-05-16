import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const visibleItems = 5;

  // Fonction pour récupérer les données depuis l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/saveurs`
        );
        setItems(response.data); // Assurez-vous que la réponse est bien un tableau d'objets
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []); // [] signifie que l'effet s'exécute uniquement au montage du composant

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    return [
      ...items.slice(currentIndex, currentIndex + visibleItems),
      ...items.slice(0, Math.max(0, currentIndex + visibleItems - totalItems)),
    ];
  };

  return (
    <div className="slider my-4">
      <h2 className="categories">Nos Saveurs</h2>
      <button className="slider-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="slider-container">
        {items.length > 0 ? (
          getVisibleItems().map((item) => (
            <div key={item.id}>
              <Link className="link-decoration" to={item.link}>
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}${item.image}`}
                  alt={item.name}
                  className="slider-image"
                />
                <h6 className="slider-title">{item.name}</h6>
              </Link>
            </div>
          ))
        ) : (
          <p>Chargement des saveurs...</p>
        )}
      </div>
    </div>
  );
};

export default Slider;

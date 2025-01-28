import React, { useState } from "react";
import image from "./sources/cookies.jpg";
const Slider = () => {
  const items = [
    { id: 1, image: "./sources/brookie.png", title: "Cookies" },
    { id: 2, image: "./sources/brownies.jpg", title: "Brownies" },
    { id: 3, image: "./sources/sale.jpg", title: "Salé" },
    { id: 4, image: "./sources/ghrayba.jpg", title: "Epecerie" },
    { id: 5, image: "./sources/epicerie.jpg", title: "Ghrayba" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const visibleItems = 5;

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
        {getVisibleItems().map((item) => (
          <div key={item.id}>
            <img src={image} alt={item.title} className="slider-image" />
            <p className="slider-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;

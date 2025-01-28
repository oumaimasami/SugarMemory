import React from "react";
import Cards from "./Cards";

const sweets = [
  {
    title: "Brownies",
    description: "chocholate",
    image: "/public/caraousel5.jpg",
  },
  {
    title: "Brookies",
    description: "loooloo",
    image: "./sources/brookies.jpg",
  },
  { title: "Cookies", description: "lll", image: "./sources/cookies.jpg" },
  { title: "Cookies", description: "lll", image: "./sources/cookies.jpg" },
];

export default function Sweets() {
  return (
    <div className="row justify-content-center">
      <h2 className="category">Nos Saveurs</h2>
      {sweets.map((item) => (
        <Cards
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

import React, { useState } from "react";

export default function Sortingmenu() {
  const [sortOption, setSortOption] = useState("default");

  const handleChange = (event) => {
    setSortOption(event.target.value);
    console.log("Selected sorting option:", event.target.value);
  };

  return (
    <div className="dropdown-sort col-md-2 col-sm-12">
      <select
        id="sorting"
        className="sorting-select"
        value={sortOption}
        onChange={handleChange}
      >
        <option value="default">Tri par défaut</option>
        <option value="popularity">Par popularité</option>
        <option value="latest">Les plus récents</option>
        <option value="priceLowHigh">Prix : croissant</option>
        <option value="priceHighLow">Prix : décroissant</option>
      </select>
    </div>
  );
}

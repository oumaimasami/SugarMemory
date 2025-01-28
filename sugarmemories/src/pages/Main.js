import React from "react";
import Caraousel from "../components/Caraousel";
import Evenement from "../components/Evenement";
import Slider from "../components/Slider";
import Review from "../components/Review";
import Quality from "../components/Quality";

export default function Main() {
  return (
    <>
      <Caraousel />
      <Evenement />
      <Slider />
      <Review />
      <Quality />
    </>
  );
}

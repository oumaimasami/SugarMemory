import React from "react";
import image from "../components/sources/1.png";
import about from "../components/sources/about.jpg";
import Quality from "../components/Quality";
import Map from "../components/Map";
export default function Maison() {
  return (
    <div className="Maison my-5">
      <div className="maison-cover justify-content-center text-center">
        <img className="maison-image py-5" src={image} alt="..." />
        <p className="maison-title">Notre maison</p>
      </div>

      <h2 className="mx-5 mt-5"> Notre pâtisserie « Sugar Memories » </h2>
      <div className="row">
        <div className="about mx-5 col-lg-5 col-md-5 col-xs-8">
          <h3 className="about-title mb-4 mt-2">Notre histoire</h3>
          <p className="about-decription">
            Au cœur de <b>Tunis</b>, capitale vibrante des saveurs authentiques,
            est né <b>Sugar Memories</b>, un atelier passionné qui sublime l'art
            de la pâtisserie depuis sa création.{" "}
          </p>
          <p className="about-decription">
            Avec une volonté d'excellence, <b>Sugar Memories</b> a su bâtir sa
            réputation grâce à des créations uniques, mêlant{" "}
            <b>douceurs sucrées</b> et <b>recettes salées raffinées</b>. De nos{" "}
            <b>brownies gourmands</b> à nos <b>cookies fondants</b>, en passant
            par des <b>gâteaux personnalisés</b> et nos{" "}
            <b>hlow arbi traditionnels</b> chaque produit raconte une histoire,
            celle de la tradition revisitée par l'innovation.
          </p>{" "}
          <p className="about-decription">
            Outre nos pâtisseries, nous proposons une sélection exceptionnelle
            d'
            <b>épicerie fine</b> : <b> zrir</b>,<b> pâte noisette</b>,{" "}
            <b>pâte pistache</b>, et bien plus encore. Nos offres salées, allant
            du <b>classique au royal</b>, témoignent également de notre souci
            d'offrir le meilleur à nos clients.
          </p>
          <p className="about-decription">
            <b>Sugar Memories</b>, c’est avant tout un <b>art</b> : celui de
            transformer chaque bouchée en un souvenir inoubliable. Fidèle à
            notre mission, nous continuons de marier{" "}
            <b>tradition et modernité</b> pour satisfaire les palais les plus
            exigeants.
          </p>
          <p className="about-decription">
            Aujourd’hui, notre ambition est de faire rayonner cet art culinaire
            à travers toute la région et au-delà, en portant fièrement notre
            héritage et nos créations uniques. Avec <b>Sugar Memories</b>,
            chaque instant devient une célébration des goûts et des saveurs qui
            nous rassemblent.
          </p>
        </div>
        <div className="about-section2 col-md-6 col-xs-12">
          <img className="about-image" src={about} alt="..." />
          <div className="gradient-line mb-4 mt-5"></div>
          <a
            href="https://www.facebook.com/saby.sho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook about-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/sugar.memories.bysaby/?fbclid=IwY2xjawH9swdleHRuA2FlbQIxMAABHSTigcPreU7o4K_DnfY4hvXYwHX0DmjiWGddW9qz64I69K0eFM-3LagPCQ_aem_XvKIrbsVvjRNMyq3OjS_Ww#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram about-icon"></i>
          </a>
          <a
            href="https://www.tiktok.com/@sugar.memories.by?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok about-icon"></i>
          </a>
        </div>
      </div>
      <div className="engagement mt-5 mx-5">
        <h1 className="about-title mb-4 ">Nos engagement</h1>
        <ul className="about-decription">
          <li className="mb-3">
            <b>Hygiène et Qualité :</b> Les ingrédients conformes 100% aux
            règles d’hygiène. Le choix et la fraîcheur des ingrédients, la
            rigueur et la formation aux méthodes de fabrication, le soin apporté
            au service et à la relation avec la clientèle. Pour chaque
            collection, Hlouwa sélectionne avec la plus grande rigueur les
            meilleurs ingrédients avec la volonté d’offrir une expérience unique
            de goûts, de sensations, d’émotions.
          </li>
          <li className="mb-3">
            Pâtisseries traditionnelles tunisiennes notamment Sfaxiennes
          </li>
          <li className="mb-3">
            <b>Goût et Raffinement : </b>
            Le secret de notre réussite, matière première de qualité supérieure
            et recettes élaborées par des chefs de renommé
          </li>
          <li>
            <b> Service et Conseil : </b>
            Pour un simple goûter ou un événement particulier, nous sommes
            toujours là pour vous conseiller et vous servir au mieux
          </li>
        </ul>
      </div>
      <Quality />
      <Map />
    </div>
  );
}

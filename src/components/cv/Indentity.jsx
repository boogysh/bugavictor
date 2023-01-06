import React from "react";
import "../cv/cv.css";
import myself from "../../assets/eu/eu2.png";

export default function indentity() {
  return (
    <section id="identity">
      {/* <div className="myself"></div> */}
      <h3 className="h3_cv h3_cv_identity">
      Identité:
      <img src={myself} alt="myself" />
        </h3>
      <div>
        <div className="container_p">
          <p className="col1">Nom:</p>
          <p className="col2">Buga</p>
        </div>
        <div className="container_p">
          <p className="col1">Prénom:</p>
          <p className="col2">Victor </p>
        </div>
        <div className="container_p">
          <p className="col1">Date de naissance:</p>
          <p className="col2">10/05/1986 </p>
        </div>
        <div className="container_p">
          <p className="col1">Lieu de naissance:</p>
          <p className="col2">Gura Bicului</p>
        </div>
        <div className="container_p">
          <p className="col1">Pays de naissance:</p>
          <p className="col2">Moldavie</p>
        </div>
        <div className="container_p">
          <p className="col1">Nationalités:</p>
          <p className="col2">Moldave, Roumaine</p>
        </div>
        <div className="container_p">
          <p className="col1">Numéro de S.S.</p>
          <p className="col2">1 86 05 99 151 027</p>
        </div>
        <div className="container_p">
          <p className="col1">Adresse:</p>
          <p className="col2">2B rue Jean Becquerel, 77300 Fontainebleau</p>
        </div>
        <div className="container_p">
          <p className="col1">N de téléphone:</p>
          <p>07 53 75 81 64</p>
        </div>
        <div className="container_p">
          <p className="col1">Email:</p>
          <p className="col2">bugavictor86@gmail.com</p>
        </div>
        <div className="container_p">
          <p className="col1">État civil</p>
          <p className="col2">Marié, deux Enfants.</p>
        </div>
      </div>
    </section>
  );
}

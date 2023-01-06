import React from "react";
import "../cv/cv.css";

export default function Aptitude() {
  return (
    <section id="aptitude">
      <div className="aptitude_item">
        <h3 className="h3_cv">Logiciels:</h3>
        <div>
          <div className="container_p">
            <p className="col3">
              AUTOCAD (<span className="italique">avancé </span>), ARCHICAD (
              <span className="italique"> moyen </span>), 3DS MAX (moyen),
              PHOTOSHOP (<span className="italique">base </span>), MS OFFICE (
              <span className="italique">word, powerpoint </span>)
            </p>
          </div>
        </div>
      </div>

      <div className="aptitude_item">
        <h3 className="h3_cv" >
          Technos de développement:
        </h3>
        <div>
          <div className="container_p">
            <p className="col3">
              HTML (<span className="italique">avancé </span>), CSS (
              <span className="italique">flexbox </span>), SASS (
              <span className="italique">moyen </span>), Javaspcript (
              <span className="italique">junior </span>), React (
              <span className="italique">Context, Redux (base) </span>), Node
              (base)
            </p>
          </div>
        </div>
      </div>

      <div className="aptitude_item">
        <h3 className="h3_cv" >
          Installation et Entretien:
        </h3>
        <div>
          <div className="container_p">
            <p className="col3">WINDOWS, Logiciels et Equipements de bureau.</p>
          </div>
        </div>
      </div>

      <div className="aptitude_item">
        <h3 className="h3_cv" >Langues:</h3>
        <div>
          <div className="container_p">
            <p className="col3">
              Roumaine/Moldave (<span className="italique">natif </span>),
              Russe(<span className="italique">avancé </span>), Français (
              <span className="italique">avancé </span>), Anglais (
              <span className="italique">
                expression écrite (le code et le commentaire en englais) ,
                comprehension écrite (moyen), comprehension orale (moyen),
                expression orale (débutant)
              </span>
              )
            </p>
          </div>
        </div>
      </div>

      <div className="aptitude_item">
        <h3 className="h3_cv" >Permis de conduire:</h3>
        <div>
          <div className="container_p">
            <p className="col3">Catégorie B</p>
          </div>
        </div>
      </div>
    </section>
  );
}

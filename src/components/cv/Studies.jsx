import React from "react";
import "../cv/cv.css";
export default function Studies() {
  return (
    <section id="studies">
      <h3 className="h3_cv" >Études et Diplômes:</h3>
      <div>
        <div className="container_p">
          <p className="col1">1992-2000</p>
          <p className="col2">Ecole Générale MERENI</p>
        </div>
        <div className="container_p">
          <p className="col1">2000-2004</p>
          <p className="col2">
            L.R.U.R. (<span className="italique">Lycée Républicain Universitaire Réel, Profil Physique -
            Mathématique</span>)
          </p>
        </div>
        <div className="container_p">
          <p className="col1">2004</p>
          <p className="col2">Diplôme de Baccalauréat</p>
        </div>
        <div className="container_p">
          <p className="col1">2004-2008</p>
          <p className="col2">
            Université Technique de Moldavie, Faculté de l’Urbanisme et de
            l’Architecture Spécialité: Bâtiments Urbains (<span className="italique">Engineering Urban
            Planning</span>)
          </p>
        </div>
        <div className="container_p">
          <p className="col1">09/2008-12/2008</p>
          <p className="col2">
            Master : L’ingénierie des Constructions Civiles (<span className="italique">Interrompu, le
            profil ne correspondait pas au programme souhaité, trop éloigné de
            l’ Architecture</span>)
          </p>
        </div>
        <div className="container_p">
          <p className="col1">01/2009-06/2009</p>
          <p className="col2">
          Formation AUTOCAD, ARCHICAD, 3DS MAX.
          </p>
        </div>
        <div className="container_p">
          <p className="col1">05/2022-11/2022</p>
          <p className="col2">
          Développeur Web, Openclassrooms (<span className="italique">Diplôme de niveau 5 (bac +2)</span>)
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../cv/cv.css";

export default function Experience() {
  return (
    <section id="experience">
      <h3 className="h3_cv">Expériences:</h3>
      <div>
        <div className="container_p">
          <p className="col1">06/2007-08/2007</p>
          <p className="col2">Stage de projection “IGC CONSTRUCT” </p>
        </div>
        <div className="container_p">
          <p className="col1">03/2008-05/2008</p>
          <p className="col2">Stage préparation Diplôme “IGC CONSTRUCT” </p>
        </div>
        <div className="container_p">
          <p className="col1">09/2009-06/2011</p>
          <p className="col2">Apprentissage “IGC CONSTRUCT” </p>
        </div>
        <div className="container_p">
          <p className="col1">09/2011-03-2012</p>
          <p className="col2">
            Activité Non salariée Polyvalente : Société Armanda 117 rue de
            Charenton 75012 Paris
          </p>
        </div>
        <div className="container_p">
          <p className="col1">03/2012-12/2013</p>
          <p className="col2">Gérant : Société “Armanda” 117 rue de Charenton 75012 Paris</p>
        </div>
        <div className="container_p">
          <p className="col1">01/2014-12/2014</p>
          <p className="col2">Activité Non salariée Polyvalente Société “Catalan Building”</p>
        </div>
        <div className="container_p">
          <p className="col1">02/2015-01/2022</p>
          <p className="col2">Société “Hères Construction”, Polyvalent(<span className="italique">Chef d’équipe, Chef de plusieurs équipes, Chef de Chantier</span>)</p>
        </div>
      </div>
    </section>
  );
}

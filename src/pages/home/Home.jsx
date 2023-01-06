import React from "react";
import "./home.css";
import Identity from "../../components/cv/Indentity";
import Studies from "../../components/cv/Studies";
import Experience from "../../components/cv/Experience";
import Characteristics from "../../components/cv/Characteristics";
import Aptitude from "../../components/cv/Aptitude";


export default function Home() {
  return (
    <main className="main-home">
      <div className="h1-home_container">
        <h1 className="h1-home">Curriculum Vitae</h1>
        <a href="https://boogysh.github.io/cv-file/CV-Buga-Victor.docx">
          <button>Télécharger</button>
        </a>
      </div>
      <Identity />
      <Studies />
      <Experience />
      <Characteristics />
      <Aptitude />
    </main>
  );
}

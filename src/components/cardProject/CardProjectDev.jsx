import React from "react";
import DefaultImage from "../../assets/imgDefault.png";
import "./cardProjectDev.css";
import "./cardProject.css";
import Slider from "../slider/Slider";


function cardProjectDev({ images, title, info, id, urlProject, urlExistent }) {
  

  

  return (
    <div className="card card_dev">
      <div className="dev_card_img_container">
        <Slider slides={images} />
      </div>
      <a href={urlProject} target="blank" id={id} title={urlProject} className="card__link">
        <div className="card_content_container">
          <div className="card_bg_hover">
            <h2>Découvrir le projet...</h2>
          </div>
          <div className="card_content">
          <h2 className="card_title">{title} <a href="https://github.com/boogysh/la-panthere_initial/" className="urlExistent" >{urlExistent}</a></h2>
          <ul>
            {info.map((item) => (
              <li>
                <span className="span_li">✅</span>
                {item}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </a>
    </div>
  );
}
export default cardProjectDev;

cardProjectDev.defaultProps = {
  image: DefaultImage,
  info: ["Info"],
};

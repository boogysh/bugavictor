import React, { useState, useEffect } from "react";
import DefaultImage from "../../assets/imgDefault.png";
import "./cardProject.css";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";

function CardProject({ images, title, info, id }) {
  const [uri, setUri] = useState();

  useEffect(() => {
    const href_arch = window.location.href.includes("/architecture");
    const href_bat = window.location.href.includes("/batiment");
    href_arch && setUri("architecture");
    href_bat && setUri("batiment");
  }, []);

  return (
    <div className="card">
      <div className="card_img_container">
        <Slider slides={images} />
      </div>
      <Link to={`/${uri}/${id}`} key={id} className="card__link">
        <div className="card_content_container">
          <div className="card_bg_hover">
            <h2>Découvrir le projet...</h2>
          </div>
          <div className="card_content">
            <h2 className="card_title">{title}</h2>
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
      </Link>
    </div>
  );
}
export default CardProject;

CardProject.defaultProps = {
  image: DefaultImage,
  info: ["Info"],
};

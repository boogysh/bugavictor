import React from "react";
import "./listPictures.css";

export default function ListPictures({ pictures }) {
  return (
    <ul className="list_pictures">
        {pictures.map((item) => (
        <li className="picture">
            <img src={item} alt="project details" />          
        </li>
      ))}
    </ul>
  );
}

import React from "react";
import "./listPictures.css";
import { v4 as uuidv4 } from "uuid";

// export default function ListPictures({ pictures }) {
export default function ListPictures(props) {
  return (
    <ul className="list_pictures">
      {props.pictures.map((item) => {
        return (
          <li className="picture" key={uuidv4()}>
            <img src={item} alt="project details" />
          </li>
        );
      })}
    </ul>
  );
}

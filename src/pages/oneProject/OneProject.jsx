import React, { useState, useEffect } from "react";
import ListPictures from "../../components/listPictures/ListPictures";
import { UseFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";
import Error500 from "../../components/errors/Error500";
import Dropdown from "../../components/dropdown/Dropdown";
import "./oneProject.css";
import "../../components/header/header.css";

export default function OneProject() {
  const [href, setHref] = useState("");

  const include_ID = window.location.href;
  useEffect(() => {
    const href_arch = window.location.href.includes("/architecture");
    const href_bat = window.location.href.includes("/batiment");
    href_arch && setHref(`https://boogysh.github.io/cv-api/data_arch.json`);
    href_bat && setHref(`https://boogysh.github.io/cv-api/data_bat.json`);
  }, [include_ID]);

  const urlPr = window.location.href;
  console.log("url from oneProject:", urlPr);

  const { data, isLoading, error } = UseFetch(href);
  const { pictures, title, info } = data;

  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_oneProjectBtm main-scroll">
      <h1 className="h1_one_projectBtm">{title}</h1>
      <div className="DD_wrapper">
        <Dropdown
          title="Info sur le projet"
          classTitle="h3_DD"
          content={info}
        />
      </div>
      <ListPictures pictures={pictures} />
    </main>
  );
}

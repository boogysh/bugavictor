import React from "react";
import Loader from "../../components/loader/Loader";
import { UseFetch } from "../../hooks/useFetch";
import Error500 from "../../components/errors/Error500";
import "./building.css";
import CardProject from "../../components/cardProject/CardProject";
import Banner from "../../components/banner/Banner";
import banner_bat from "../../assets/pr-bat/7.png";

export default function Building() {
  const { data, isLoading, error } = UseFetch(`https://boogysh.github.io/cv-api/data_bat.json`); //UseFetch(`/pr_bat/data.json`)
  console.log(data);

  

  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_building">
      {/* <Banner3x /> */}
      <Banner title="Bâtiment" src={banner_bat} />
      <section id="cards" className="cards_bat">
        {data.map((item) => {
          const { id, pictures, title, info } = item;
          return (
            <CardProject images={pictures} title={title} info={info} id={id} />
          );
        })}
      </section>
    </main>
  );
}

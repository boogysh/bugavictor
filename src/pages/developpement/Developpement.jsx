import React from "react";
import "./developpement.css";
import Banner from "../../components/banner/Banner";
import banner_dev from "../../assets/pr-dev/banner1_dev.png";
import Loader from "../../components/loader/Loader";
import { UseFetch } from "../../hooks/useFetch";
import Error500 from "../../components/errors/Error500";
import CardProjectDev from "../../components/cardProject/CardProjectDev";
export default function Developpement() {
  const { data, isLoading, error } = UseFetch(`https://boogysh.github.io/cv-api/data_dev.json`); //UseFetch(`/pr_dev/data.json`)
  console.log(data);

  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_dev">
      {/* <Banner3x /> */}
      <Banner title="Développement" src={banner_dev} />
      <section id="cards" className="cards_bat">
        {data.map((item) => {
          const { id, pictures, title, info, urlProject, urlExistent } = item;
          return (
            <CardProjectDev
              images={pictures}
              title={title}
              info={info}
              id={id}
              urlProject={urlProject}
              urlExistent={urlExistent}
            />
          );
        })}
      </section>
    </main>
  );
}

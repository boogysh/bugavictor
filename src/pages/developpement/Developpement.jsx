import React from "react";
// import "./developpement.css";
import "../architecture/architecture.css";
import "../building/building.css";
import "../../components/header/header.css";
import Banner from "../../components/banner/Banner";
import banner_dev from "../../assets/pr-dev/banner1_dev.png";
import Loader from "../../components/loader/Loader";
import { UseFetch } from "../../hooks/useFetch";
import Error500 from "../../components/errors/Error500";
// import CardProjectDev from "../../components/cardProject/CardProjectDev";
import CardProject from "../../components/cardProject/CardProject";
export default function Developpement() {
  const { data, isLoading, error } = UseFetch(
    `https://boogysh.github.io/cv-api/data_dev.json`
  );
  // const { data, isLoading, error } = UseFetch(`/pr_dev/data_dev.json`);

  // console.log(data);

  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    // <main className="main_dev main-scroll">
    <main className="main_architecture main-scroll">
      <Banner title="Développement" src={banner_dev} />
      <section id="cards">
        {data.map((item) => {
          const { id, pictures, title, info, urlProject, urlExistent } = item;
          return (
            <CardProject
              key={id}
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

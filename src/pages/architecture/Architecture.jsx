import { UseFetch } from "../../hooks/useFetch";
import "./architecture.css";
import CardProject from "../../components/cardProject/CardProject";
import Loader from "../../components/loader/Loader";
import Error500 from "../../components/errors/Error500";
import Banner from "../../components/banner/Banner";
import banner from "../../assets/pr-arch/front-1200.jpg";
export default function Architecture() {
  const { data, isLoading, error } = UseFetch(`https://boogysh.github.io/cv-api/data_arch.json`); //UseFetch(`/pr_arch/data.json`);
  console.log(data);

  if (error) return <Error500 />;
  return isLoading ? (
    <Loader />
  ) : (
    <main className="main_architecture">
      {/* <Banner3x /> */}
      <Banner src={banner} title="Architecture" />
      <section id="cards">
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

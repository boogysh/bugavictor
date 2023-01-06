import { useState, useEffect } from "react";
import "./banner.css";
function Banner({ src, title }) {
  const [className, setClassName] = useState("banner_title");

  useEffect(() => {
    // const href_arch = window.location.href.includes("/architecture");
    // const href_bat = window.location.href.includes("/batiment");
    // href_arch && setUri("architecture");
    // href_bat && setUri("batiment");

    const href_bat = window.location.href.includes("/batiment");
    const href_dev = window.location.href.includes("/developpement");

    href_dev && setClassName("banner_title_dev");
    href_bat && setClassName("banner_title_dev");
  }, []);

  return (
    <div className="banner">
      <img className="bannerImg" src={src} alt="banner home" />
      <h1 className={className}>{title}</h1>
    </div>
  );
}
export default Banner;

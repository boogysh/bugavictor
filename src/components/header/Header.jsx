import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import Banner3x from "../banner3x/Banner3x"
import "./header.css";
import html from "../../assets/pr-dev/html.png";
import css from "../../assets/pr-dev/css.png";
import js from "../../assets/pr-dev/js.png";
import react from "../../assets/pr-dev/react.png";
import node from "../../assets/pr-dev/node.png";
import balise_ouvr from "../../assets/pr-dev/balise-ouvr.png";
import balise_ferm from "../../assets/pr-dev/balise-ferm.png";
import HeaderContact from "../header-contact/HeaderContact.jsx";
import HeaderBurger from "../header-burger/HeaderBurger";

function Header() {
  const activeLink = "item_nav active";
  const normalLink = "item_nav";

  const [isOpen, setIsOpen] = useState("nav_hidden");
  const [isAnimated, setAnimated] = useState("");

  const bgHover = () => {
    const cv = document.querySelector("#cv");
    const architecture = document.querySelector("#architecture");
    const batiment = document.querySelector("#batiment");
    const developpement = document.querySelector("#developpement");

    const bg_arch_hover = document.querySelector("#bg_arch_hover");
    const bg_bat_hover = document.querySelector("#bg_bat_hover");
    const bg_dev_hover = document.querySelector("#bg_dev_hover");

    const h3_pr_arch = document.querySelector(".h3_pr_arch");
    const h3_pr_bat = document.querySelector(".h3_pr_bat");
    const h3_pr_dev = document.querySelector(".h3_pr_dev");

    cv.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.remove("active");
      bg_bat_hover.classList.remove("active");
      bg_dev_hover.classList.remove("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.remove("h3_pr_arch_anim");
      h3_pr_bat.classList.remove("h3_pr_arch_anim");
      h3_pr_dev.classList.remove("h3_pr_arch_anim");
    });

    architecture.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.add("active");
      bg_bat_hover.classList.remove("active");
      bg_dev_hover.classList.remove("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.add("h3_pr_arch_anim");
      h3_pr_bat.classList.remove("h3_pr_arch_anim");
      h3_pr_dev.classList.remove("h3_pr_arch_anim");
    });
    batiment.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.remove("active");
      bg_bat_hover.classList.add("active");
      bg_dev_hover.classList.remove("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.remove("h3_pr_arch_anim");
      h3_pr_bat.classList.add("h3_pr_arch_anim");
      h3_pr_dev.classList.remove("h3_pr_arch_anim");
    });
    developpement.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.remove("active");
      bg_bat_hover.classList.remove("active");
      bg_dev_hover.classList.add("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.remove("h3_pr_arch_anim");
      h3_pr_bat.classList.remove("h3_pr_arch_anim");
      h3_pr_dev.classList.add("h3_pr_arch_anim");
    });
    bg_arch_hover.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.add("active");
      bg_bat_hover.classList.remove("active");
      bg_dev_hover.classList.remove("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.add("h3_pr_arch_anim");
      h3_pr_bat.classList.remove("h3_pr_arch_anim");
      h3_pr_dev.classList.remove("h3_pr_arch_anim");
    });
    bg_bat_hover.addEventListener("click", function () {
      //add or remove item_bg_hover
      bg_arch_hover.classList.remove("active");
      bg_bat_hover.classList.add("active");
      bg_dev_hover.classList.remove("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.remove("h3_pr_arch_anim");
      h3_pr_bat.classList.add("h3_pr_arch_anim");
      h3_pr_dev.classList.remove("h3_pr_arch_anim");
    });
    bg_dev_hover.addEventListener("click", function () {
      bg_arch_hover.classList.remove("active");
      bg_bat_hover.classList.remove("active");
      bg_dev_hover.classList.add("active");

      // add or remove title to item of banner_3x
      h3_pr_arch.classList.remove("h3_pr_arch_anim");
      h3_pr_bat.classList.remove("h3_pr_arch_anim");
      h3_pr_dev.classList.add("h3_pr_arch_anim");
    });
  };

  const toggleNav = () => {
    setIsOpen(isOpen === "nav_hidden" ? "" : "nav_hidden");
    setAnimated(isAnimated === "menu_anim" ? "" : "menu_anim");
  };

  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div onClick={bgHover} className="header_container">
      <div className="header_content">
        <div className="header_contact_container">
          <div className="header_contact">
            <h3 className="h3_header">Buga Victor</h3>
            <HeaderContact />
          </div>
          <HeaderBurger toggle={toggleNav} Animation={isAnimated} />
        </div>
        <nav className={isOpen}>
          <NavLink
            id="cv"
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            CV
          </NavLink>
          <NavLink
            id="architecture"
            to="/architecture"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Architecture
          </NavLink>
          <NavLink
            id="batiment"
            to="/batiment"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Bâtiment
          </NavLink>
          <NavLink
            id="developpement"
            to="/developpement"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Développement
          </NavLink>
        </nav>
      </div>
      {/* //------------------------------------------------------------- */}
      {/* <Banner3x addClass="header_DD_active"/>  */}

      <div className="banner_3x_container">
        <Link className="banner_3x_item bg_arch" to="/architecture">
          <div id="bg_arch_hover" className="item_bg_hover"></div>
          <h3 className="h3_pr_arch">Architecture</h3>
          <h4 className="h4_pr_arch">2004 - 2011</h4>
        </Link>
        <Link to="/batiment" className="banner_3x_item bg_bat">
          <div id="bg_bat_hover" className="item_bg_hover"></div>
          <h3 className="h3_pr_bat">Bâtiment</h3>
          <h4 className="h4_pr_bat">2011 - 2021</h4>
        </Link>
        <Link to="/developpement" className="banner_3x_item bg_dev">
          <div id="bg_dev_hover" className="item_bg_hover"></div>
          <h3 className="h3_pr_dev">Développement</h3>
          <div className="container_logos">
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={js} alt="js logo" />
            <img src={react} alt="react logo" />
            <img src={node} alt="node logo" />
          </div>
          <div className="pr_dev_title">
            <img src={balise_ouvr} alt="balise ouvrante" />
            <h4 className="h4_pr_dev">2021... </h4>
            <img src={balise_ferm} alt="balise fermante" />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;

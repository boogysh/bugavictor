import React, { useState, useEffect } from "react";
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

  const [isBG_arch_hover, setBG_arch_hover] = useState(false);
  const [isBG_bat_hover, setBG_bat_hover] = useState(false);
  const [isBG_dev_hover, setBG_dev_hover] = useState(false);

  const [isH3Arch, setH3Arch] = useState(false);
  const [isH3Bat, setH3Bat] = useState(false);
  const [isH3Dev, setH3Dev] = useState(false);

  const addBgAndTitleArch = () => {
    setBG_arch_hover(true);
    setBG_bat_hover(false);
    setBG_dev_hover(false);

    setH3Arch(true);
    setH3Bat(false);
    setH3Dev(false);
  };
  const addBgAndTitleBat = () => {
    setBG_arch_hover(false);
    setBG_bat_hover(true);
    setBG_dev_hover(false);

    setH3Arch(false);
    setH3Bat(true);
    setH3Dev(false);
  };
  const addBgAndTitleDev = () => {
    setBG_arch_hover(false);
    setBG_bat_hover(false);
    setBG_dev_hover(true);

    setH3Arch(false);
    setH3Bat(false);
    setH3Dev(true);
  };
  const removeAllBgAndTitles = () => {
    setBG_arch_hover(false);
    setBG_bat_hover(false);
    setBG_dev_hover(false);

    setH3Arch(false);
    setH3Bat(false);
    setH3Dev(false);
  };

  const toggleNav = () => {
    setIsOpen(isOpen === "nav_hidden" ? "" : "nav_hidden");
    setAnimated(isAnimated === "menu_anim" ? "" : "menu_anim");
  };

  //---------scroll limit-----------------

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [matchesMobileLarge, setmatchesMobileLarge] = useState(
    window.matchMedia("(min-width: 540px) and (max-width:767px)")
      .matchesMobileLarge
  );
  const [matchesMobileMedium, setmatchesMobileMedium] = useState(
    window.matchMedia("(min-width: 370px) and (max-width:539px)")
      .matchesMobileMedium
  );
  const [matchesMobileSmall, setmatchesMobileSmall] = useState(
    window.matchMedia("(min-width: 370px) and (max-width:539px)")
      .matchesMobileMedium
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    window
      .matchMedia("(min-width: 540px) and (max-width:767px)")
      .addEventListener("change", (e) => setmatchesMobileLarge(e.matches));
    window
      .matchMedia("(min-width: 370px) and (max-width:539px)")
      .addEventListener("change", (e) => setmatchesMobileMedium(e.matches));
    window
      .matchMedia("(max-width: 370px)")
      .addEventListener("change", (e) => setmatchesMobileSmall(e.matches));
  }, []);

  const scrollFunction = () => {
    const element = document.querySelector(".header_content");
    const mainScroll = document.querySelector(".main-scroll");
    const scroll =
      document.body.scrollTop > 215 || document.documentElement.scrollTop > 215;
    const scrollMobileLarge =
      document.body.scrollTop > 625 || document.documentElement.scrollTop > 625;
    const scrollMobileMedium =
      document.body.scrollTop > 520 || document.documentElement.scrollTop > 520;
    const scrollMobileSmall =
      document.body.scrollTop > 430 || document.documentElement.scrollTop > 430;
    if (matches && scroll) {
      element && element.classList.add("fixed");
      mainScroll && mainScroll.classList.add("padding_fixed");
    } else if (matchesMobileLarge && scrollMobileLarge) {
      element && element.classList.add("fixed");
      mainScroll && mainScroll.classList.add("padding_fixed");
    } else if (matchesMobileMedium && scrollMobileMedium) {
      element && element.classList.add("fixed");
      mainScroll && mainScroll.classList.add("padding_fixed");
    } else if (matchesMobileSmall && scrollMobileSmall) {
      element && element.classList.add("fixed");
      mainScroll && mainScroll.classList.add("padding_fixed");
    } else {
      element && element.classList.remove("fixed");
      mainScroll && mainScroll.classList.remove("padding_fixed");
    }
  };
  window.onscroll = scrollFunction;
  window.onload = scrollFunction;
  // window.onscroll  = function () {
  //   scrollFunction();
  // };

  //------------------------------------

  return (
    // <div onClick={bgHover} className="header_container">
    <div className="header_container">
      {/* ----------------------- */}

      {/* <Banner3x addClass="header_DD_active"/>  */}

      <div className="banner_3x_container autohide">
        <div className="banner_3x_item bg_arch">
          <Link
            className="linkAbsolute"
            onClick={addBgAndTitleArch}
            to="/architecture"
          ></Link>
          <div
            id="bg_arch_hover"
            className={
              isBG_arch_hover ? "item_bg_hover active" : "item_bg_hover"
            }
          ></div>
          <h3
            className={isH3Arch ? "h3_pr_arch h3_pr_arch_anim" : "h3_pr_arch"}
          >
            Architecture
          </h3>
          <h4 className="h4_pr_arch">2004 - 2011</h4>
        </div>
        <div className="banner_3x_item bg_bat">
          <Link
            className="linkAbsolute"
            onClick={addBgAndTitleBat}
            to="/batiment"
          ></Link>
          <div
            id="bg_bat_hover"
            className={
              isBG_bat_hover ? "item_bg_hover active" : "item_bg_hover"
            }
          ></div>
          <h3 className={isH3Bat ? "h3_pr_bat h3_pr_arch_anim" : "h3_pr_bat"}>
            Bâtiment
          </h3>
          <h4 className="h4_pr_bat">2011 - 2021</h4>
        </div>
        <div className="banner_3x_item bg_dev">
          <Link
            className="linkAbsolute"
            onClick={addBgAndTitleDev}
            to="/developpement"
          ></Link>
          <div
            id="bg_dev_hover"
            className={
              isBG_dev_hover ? "item_bg_hover active" : "item_bg_hover"
            }
          ></div>

          <h3 className={isH3Dev ? "h3_pr_dev h3_pr_arch_anim" : "h3_pr_dev"}>
            Développement
          </h3>
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
        </div>
      </div>

      <div className="header_content scroll">
        <div className="header_contact_container">
          <div className="header_contact">
            <h3 className="h3_header">Buga Victor</h3>
            <HeaderContact />
          </div>
          <HeaderBurger toggle={toggleNav} Animation={isAnimated} />
        </div>
        <nav className={isOpen}>
          <NavLink
            onClick={removeAllBgAndTitles}
            id="cv"
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            CV
          </NavLink>
          <NavLink
            onClick={addBgAndTitleArch}
            id="architecture"
            to="/architecture"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Architecture
          </NavLink>
          <NavLink
            onClick={addBgAndTitleBat}
            id="batiment"
            to="/batiment"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Bâtiment
          </NavLink>
          <NavLink
            onClick={addBgAndTitleDev}
            id="developpement"
            to="/developpement"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Développement
          </NavLink>
        </nav>
      </div>
      {/* //------------------------------------------------------------- */}
    </div>
  );
}
export default Header;

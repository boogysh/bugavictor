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

  const [isOpen, setIsOpen] = useState('nav_hidden')
  const [isAnimated, setAnimated] = useState('')

  const toggleNav = () => {
    setIsOpen(isOpen === 'nav_hidden' ? '' : 'nav_hidden')
    setAnimated(isAnimated === 'menu_anim' ? '' : 'menu_anim')
  }
  return (
    <div className="header_container">
      <div className="header_content">
        <div className="header_contact_container">
          <div className="header_contact">
            <h3 className="h3_header">Buga Victor</h3>
            <HeaderContact />
          </div>
          <HeaderBurger toggle={toggleNav} Animation={isAnimated}/>
        </div>
        <nav className={isOpen}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            CV
          </NavLink>
          <NavLink
            to="/architecture"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Architecture
          </NavLink>
          <NavLink
            to="/batiment"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Bâtiment
          </NavLink>
          <NavLink
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
        <Link to="/architecture" className="banner_3x_item bg_arch">
          <div className="item_bg_hover"></div>
          <h3 className="h3_pr_arch">Architecture</h3>
          <h4 className="h4_pr_arch">2004 - 2011</h4>
        </Link>

        <Link to="/batiment" className="banner_3x_item bg_bat">
          <div className="item_bg_hover"></div>
          <h3 className="h3_pr_arch">Bâtiment</h3>
          <h4 className="h4_pr_bat">2011 - 2021</h4>
        </Link>
        <Link to="/developpement" className="banner_3x_item bg_dev">
          <div className="item_bg_hover"></div>
          <h3 className="h3_pr_arch">Développement</h3>
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
      {/* header_DD_active ------------------------------------------------  */}
    </div>
  );
}
export default Header;

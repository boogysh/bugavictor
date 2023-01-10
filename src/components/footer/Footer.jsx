import React, { useState, useEffect } from "react";
import "../footer/footer.css";
//import logo_footer from '../../assets/logo-footer.png'
import logo_tel from "../../assets/logos/telephone.png";
import logo_gmail from "../../assets/logos/gmail.png";
import logo_linkedin from "../../assets/logos/linkedin.png";

function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 400);
  }, [show]);
  return (
    show && (
      <footer>
        <div className="contact_container">
          <h3 className="h3_footer">Contact:</h3>
          <div className="footer_contact_list">
            <a className="footer_contact_item" href="tel:+33753758164">
              <img className="logo_footer" src={logo_tel} alt="telephone" />
            </a>
            <a
              className="footer_contact_item"
              href="mailto:bugavictor86@gmail.com?subject=Message_Buga_Victor"
            >
              <img className="logo_footer" src={logo_gmail} alt="gmail" />
            </a>
            <a
              className="footer_contact_item"
              href="https://www.linkedin.com/in/buga-victor-540913245/"
              target="blank"
            >
              <img className="logo_footer" src={logo_linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <h5 className="h5_footer">&copy; Boogysh. All right reserved. v_1.07</h5>
        <h5 className="h6_footer">Updated : 10/01/2023</h5>
       
      </footer>
    )
  );
}
export default Footer;

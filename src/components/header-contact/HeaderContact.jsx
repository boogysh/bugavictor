import React from 'react'
import "./header_contact.css"
import logo_tel from "../../assets/logos/telephone.png";
import logo_gmail from "../../assets/logos/gmail.png";
import logo_linkedin from "../../assets/logos/linkedin.png";


export default function Header_contact() {
  return (
    <div className="header_contact_list">
            <a
              className="header_contact_item"
              href="tel:+33753758164"
              title="+33753758164"
            >
              <img className="logo_header" src={logo_tel} alt="telephone" />
            </a>
            <a
              className="header_contact_item"
              href="mailto:bugavictor86@gmail.com? subject=Message_Buga_Victor"
              title="bugavictor86@gmail.com"
            >
              <img className="logo_header" src={logo_gmail} alt="gmail" />
            </a>
            <a
              className="header_contact_item"
              href="https://www.linkedin.com/in/buga-victor-540913245/"
              title="https://www.linkedin.com/in/buga-victor-540913245/"
              target="blank"
            >
              <img className="logo_header" src={logo_linkedin} alt="linkedin" />
            </a>
          </div>
  )
}

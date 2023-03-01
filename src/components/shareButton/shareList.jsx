import React from "react";
import "./shareList.css";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  ViberIcon,
} from "react-share";

const ShareButton2 = (props) => {
  const projectName = props.projectName;
  const title = `Stats and Transparency score for ${projectName}`;
  const description = `Explore real time stats on raised funds, 
  tokens and investors in ${projectName} and review comprehensive 
  transparency score based on ${projectName} smart contracts code.`;

  return (
    <div // -----------------SHARE-------------
      className={
        props.show_shareList
          ? "card_like_container"
          : "card_like_container hidden"
      }
    >
      <div className="card_share">
        <ul className="social-share">
          <li>
            <EmailShareButton
              url={window.location.href}
              title={props.title}
              description={description}
            >
              <EmailIcon size={40} round="true" />
            </EmailShareButton>
          </li>
          <li>
            <LinkedinShareButton
              // url={`${window.location.href}#${props.id}`}
              url={props.url}
              title={props.title}
              description={description}
            >
              <LinkedinIcon size={40} round="true" />
            </LinkedinShareButton>
          </li>
          <li>
            <FacebookShareButton
              // url={`${window.location.href}#${props.id}`}
              url={props.url}
              quote={`${title}, ${description}`}
            >
              <FacebookIcon size={40} round="true" />
            </FacebookShareButton>
          </li>
          <li>
            <WhatsappShareButton
              // url={window.location.href}
              url={props.url}
              title={title}
              via={description}
            >
              <WhatsappIcon size={40} round="true" />
            </WhatsappShareButton>
          </li>
          <li>
            <ViberShareButton
              // url={window.location.href}
              url={props.url}
              title={title}
              via={description}
            >
              <ViberIcon size={40} round="true" />
            </ViberShareButton>
          </li>
          <li>
            <TwitterShareButton
              // url={window.location.href}
              url={props.url}
              title={title}
              via={description}
            >
              <TwitterIcon size={40} round="true" />
            </TwitterShareButton>
          </li>
        </ul>
        <button onClick={props.closeShareList} className="card_share_close_btn">
          x
        </button>
      </div>
    </div>
  );
};
export default ShareButton2;

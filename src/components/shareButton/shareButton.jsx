import React from "react";
import shareIcon from "../../assets/share.png";


const ShareButton = ({ title, url }) => {
  const shareContent = async () => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={shareContent} className="likeAndComment_btn">
      <img src={shareIcon} className="card_icon" alt="share icon" />
      <span className="likesNr">Distribuer</span>
    </button>
  );
};

export default ShareButton;

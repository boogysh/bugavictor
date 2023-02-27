// import React, {useState} from "react";
import React, { useState, useEffect } from "react";
import like from "../../../assets/like.png";
import like2 from "../../../assets/like6.png";
import comment from "../../../assets/comment1.png";
import share from "../../../assets/share.png";
import { UseFetch2 } from "../../../hooks/useFetch2";

export default function LikeAndCommentCard(props) {
  const [likesQty, setLikesQty] = useState(0);
  const { data2 } = UseFetch2(
    `http://localhost:4000/api/likes`,
    props.statePage // force fetch to refresh after sending a comment and openComments
  );

  useEffect(() => {
    data2.filter(
      (like) => like.project === props.id && setLikesQty(like.likes)
    );
  }, [data2, props.id]);

  return (
    <div className="likeAndComment_container">
      <div className="likeAndComment_result">
        <div className="likeAndComment_qty">
          <img src={like} className="card_icon_small" alt="like" />{" "}
          {/* <span className="likesNr">{props.likesQty}</span> */}
          <span className="likesNr">{likesQty}</span>
        </div>
        <button onClick={props.openAllComments} className="likeAndComment_btn">
          Commentaires {props.commentsQty}
        </button>
      </div>
      <div className="separe_likes"></div>
      <div className="likeAndComment_add">
        <button onClick={props.likePost} className="likeAndComment_btn">
          <img
            src={props.liked ? like2 : like}
            className="card_icon card_icon_like"
            alt="like"
          />
          <span className="likesNr">J'aime</span>
        </button>
        <button onClick={props.openComments} className="likeAndComment_btn">
          <img src={comment} className="card_icon comment_icon" alt="like" />
          <span className="likesNr">Commenter</span>
        </button>
        <button className="likeAndComment_btn">
          <img src={share} className="card_icon" alt="like" />
          <span className="likesNr">Distribuer</span>
        </button>
      </div>
    </div>
  );
}

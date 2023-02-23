import React from "react";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment1.png";
import share from "../../../assets/share.png";


export default function LikeAndCommentCard(props) {
//   const [commentsQty, setCommentsQty] = useState(0);
// props.id
// props.openAllComments
// props.openLike
// props.openComments
// props.commentsQty

//   useEffect(() => {
//     const result = data.filter((comment) => comment.project === props.id);
//     setCommentsQty(result.length);
//     setFilteredComments(result);
//   }, [data, props.id]);

  return (
    <div className="likeAndComment_container">
      <div className="likeAndComment_result">
        <div className="likeAndComment_qty">
          <img src={like} className="card_icon_small" alt="like" />{" "}
          <span className="likesNr">5</span>
        </div>
        <button onClick={props.openAllComments} className="likeAndComment_btn">
          Commentaires {props.commentsQty}
        </button>
      </div>
      <div className="separe_likes"></div>
      <div className="likeAndComment_add">
        <button onClick={props.openLike} className="likeAndComment_btn">
          <img src={like} className="card_icon" alt="like" />
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

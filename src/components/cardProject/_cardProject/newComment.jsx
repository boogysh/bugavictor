import React from "react";
import sendComment from "../../../assets/send-comment2.png";
import useFormComment from "../../../hooks/useForm/useFormComment";

export default function NewComment({
  closeComments,
  id,
  statePage,
  setStatePage,
}) {
  //--------MATCH FIRST-NAME, MATCH-LAST-NAME, MATCH-COMMENT---------------
  const {
    borderRedFunc,
    resetValues,
    val,
    borderRed,
    matchFN,
    matchLN,
    matchComment,
  } = useFormComment();
  //-------COMMENT-POST-CONTENT------------
  const commentToPost = {
    firstName: `${val.firstName}`,
    lastName: `${val.lastName}`,
    commentTxt: `${val.comment}`,
    project: `${id}`,
  };
  //----------COMMENT-POST-FUNCTION---------------
  const commentPost = (e) => {
    e.preventDefault();
    if (val.comment && val.firstName && val.lastName && id) {
      // fetch(`${env.API_URL_MSG}`, {
      const fetchCommentPost = fetch("http://localhost:4000/api/comments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentToPost),
      });
      //----CLEAR INPUTS AND REFRESH COMMENTS--------
      const cleanAndRefresh = async () => {
        await fetchCommentPost;
        resetValues();
        setStatePage(statePage + 1);
      };
      cleanAndRefresh();
    } else {
      borderRedFunc();
    }
  };

  return (
    <div id="comment_form" className="card_comment">
      <div className="card_comment_name">
        {/* -----LN-------- */}
        <input
          id="comment_LN"
          onChange={matchLN}
          className={
            borderRed.lastName
              ? "card_comment_input card_comment_input_name border_red"
              : "card_comment_input card_comment_input_name"
          }
          type="text"
          placeholder="Nom..."
        />
        {/* ------FN--------*/}
        <input
          id="comment_FN"
          onChange={matchFN}
          className={
            borderRed.firstName
              ? "card_comment_input card_comment_input_name border_red"
              : "card_comment_input card_comment_input_name"
          }
          type="text"
          placeholder="Prénom..."
        />
      </div>
      <div className="card_comment_text">
        <textarea
          id="comment_textarea"
          onChange={matchComment}
          className={
            borderRed.comment
              ? "card_comment_textarea border_red"
              : "card_comment_textarea"
          }
          type="text"
          placeholder="Laisez un commentaire..."
        />
        <button
          type="submit"
          className="card_comment_send"
          onClick={commentPost}
        >
          <img className="card_icon_send" src={sendComment} alt="envoyer" />
        </button>
      </div>
      <button onClick={closeComments} className="card_comment_close_btn">
        x
      </button>
    </div>
  );
}

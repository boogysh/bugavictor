import React, { useState, useEffect } from "react";
import DefaultImage from "../../assets/imgDefault.png"; //?????
import "./cardProject.css";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import like from "../../assets/like.png";
import sendComment from "../../assets/send-comment2.png";
import down from "../../assets/down.png";
import { UseFetch } from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader/Loader";
import axios from "axios";
import LikeAndCommentCard from "./_cardProject/likeAndCommentCard";
// import { MatchFirstName } from "../matchInputs/matchFirstName";

function CardProject({ images, title, info, id }) {
  const [uri, setUri] = useState();

  const [isFN, setFN] = useState("");
  const [isFNBorderRed, setFNBorderRed] = useState(false);
  const [isLN, setLN] = useState("");
  const [isLNBorderRed, setLNBorderRed] = useState(false);
  const [isComment, setComment] = useState("");
  const [isCommentBorderRed, setCommentBorderRed] = useState(false);

  //  ADD showNewCommentAndLastTwo
  const [showNewCommentAndLastTwo, setshowNewCommentAndLastTwo] =
    useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const [statePage, setStatePage] = useState(0);
  const [filteredComments, setFilteredComments] = useState([]);
  // axios IP
  const [ip, setIP] = useState("");
  console.log(ip);

  //---------------------FETCH---------------------------------
  const { data, isLoading } = UseFetch(
    `http://localhost:4000/api/comments`,
    statePage // force fetch to refresh after sending a comment and openComments
  );
  //---------------------AXIOS-----------------------------------
  //creating function to load ip address from the API
  const getDataIp = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };
  useEffect(() => {
    getDataIp();
  }, []);
  //---------- COMMENTS QUANTITY------------------------
  const [commentsQty, setCommentsQty] = useState(0);
  useEffect(() => {
    const result = data.filter((comment) => comment.project === id);
    setCommentsQty(result.length);
    setFilteredComments(result);
  }, [data, id]);
  //----------------------------------------------------
  //open and close Like card
  const openLike = () => {
    setShowLike(true);
  };
  const closeLike = () => {
    setShowLike(false);
  };
  //---------------------------------------------------
  // Open and close  a few comments
  const openComments = () => {
    setshowNewCommentAndLastTwo(true);
    setStatePage(statePage + 1);
  };
  const closeComments = () => {
    setshowNewCommentAndLastTwo(false);
    setShowAllComments(false);
    setStatePage(statePage + 1); //refresh comments
  };
  // Open and close all comments
  const openAllComments = () => {
    setshowNewCommentAndLastTwo(true);
    setShowAllComments(true);
  };

  useEffect(() => {
    const href_arch = window.location.href.includes("/architecture");
    const href_bat = window.location.href.includes("/batiment");
    href_arch && setUri("architecture");
    href_bat && setUri("batiment");
  }, [uri]);

  //--------MATCH FIRST NAME ------------------
  // const { isFN, isFNBorderRed, setFNBorderRed} = MatchFirstName; 

  const matchFirstName = (e) => {
    const val = e.target.value;
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) setFNBorderRed(false);
    else if (val.length < 3 || val.length > 25) {
      setFN("");
      setFNBorderRed(true);
    } else if (matched) {
      setFN(val);
      setFNBorderRed(false);
    } else if (!matched) {
      setFN("");
      setFNBorderRed(true);
    }
  };
  //--------MATCH LAST NAME -------------------
  const matchLastName = (e) => {
    const val = e.target.value;
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) setLNBorderRed(false);
    else if (val.length < 3 || val.length > 25) {
      setLN("");
      setLNBorderRed(true);
    } else if (matched) {
      setLN(val);
      setLNBorderRed(false);
    } else if (!matched) {
      setLN("");
      setLNBorderRed(true);
    }
  };
  //--------MATCH COMMENT ---------------------
  const matchComment = (e) => {
    const val = e.target.value;
    const matched = val.match(
      /^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]+$/
    );
    if (val.length === 0) setCommentBorderRed(false);
    else if (val.length < 3) {
      setComment("");
      setCommentBorderRed(true);
    } else if (matched) {
      setComment(val);
      setCommentBorderRed(false);
    } else if (!matched) {
      setComment("");
      setCommentBorderRed(true);
    }
  };

  const borderRed = () => {
    if (!isFN) setFNBorderRed(true);
    if (!isLN) setLNBorderRed(true);
    if (!isComment) setCommentBorderRed(true);
    else return;
  };

  const commentToPost = {
    firstName: `${isFN}`,
    lastName: `${isLN}`,
    commentTxt: `${isComment}`,
    project: `${id}`,
  };
  //------------------
  const commentPost = (e) => {
    e.preventDefault();
    // Array.from(document.querySelectorAll('input'));.
    const commentInput = document.querySelectorAll("input");
    commentInput.forEach((input) => (input.value = ""));
    const commentTextarea = document.querySelectorAll("textarea");
    commentTextarea.forEach((input) => (input.value = ""));
    if (isComment && isFN && isLN && id) {
      // fetch(`${env.API_URL_MSG}`, {
      const fetchCommentPost = fetch("http://localhost:4000/api/comments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentToPost),
      });
      commentInput.value = "";
      commentTextarea.value = "";
      //-----------
      const cleanNewCommentInputs = async () => {
        await fetchCommentPost;
      };
      cleanNewCommentInputs();
      //---------
      const refreshComments = async () => {
        await fetchCommentPost;
        setStatePage(statePage + 1);
      };
      refreshComments();
      //----------
      // props.msgConfirm();
    } else {
      borderRed();
    }
  };

  //------------------

  return (
    <div className="card_wrapper">
      <div className="card">
        {/* ------------------------???img_container??? */}
        <div className="card_img_container">
          <div className="slider_wrapper">
            <Slider slides={images} />
          </div>
          {/* <div className="likeAndComment_container">
            <div className="likeAndComment_result">
              <div className="likeAndComment_qty">
                <img src={like} className="card_icon_small" alt="like" />{" "}
                <span className="likesNr">5</span>
              </div>
              <button onClick={openAllComments} className="likeAndComment_btn">
                Commentaires {commentsQty}
              </button>
            </div>
            <div className="separe_likes"></div>
            <div className="likeAndComment_add">
              <button onClick={openLike} className="likeAndComment_btn">
                <img src={like} className="card_icon" alt="like" />
                <span className="likesNr">J'aime</span>
              </button>
              <button onClick={openComments} className="likeAndComment_btn">
                <img
                  src={comment}
                  className="card_icon comment_icon"
                  alt="like"
                />
                <span className="likesNr">Commenter</span>
              </button>
              <button className="likeAndComment_btn">
                <img src={share} className="card_icon" alt="like" />
                <span className="likesNr">Distribuer</span>
              </button>
            </div>
          </div> */}
          <LikeAndCommentCard
            id={id}
            openAllComments={openAllComments}
            openlike={openLike}
            openComments={openComments}
            commentsQty={commentsQty}
          />
        </div>
        <Link to={`/${uri}/${id}`} className="card__link">
          <div
            className={
              showLike || showNewCommentAndLastTwo
                ? "card_content_container remove_border_bottom_right"
                : "card_content_container"
            }
          >
            <div className="card_bg_hover">
              <h2>Découvrir le projet...</h2>
            </div>
            <div className="card_content">
              <h2 className="card_title">{title}</h2>
              <ul>
                {info.map((item) => (
                  <li key={uuidv4()}>
                    <span className="span_li">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
      {/* ----------LIKES------------- */}
      <div
        className={
          showLike ? "card_like_container" : "card_like_container hidden"
        }
      >
        <h3 className="card_like_h3">
          Vous n'êtes pas connecté... Laissez votre nom et votre prénom
        </h3>
        <div className="card_comment">
          <div className="card_comment_name">
            <input
              className="card_comment_input card_comment_input_name"
              type="text"
              placeholder="Nom..."
            />
            <input
              className="card_comment_input card_comment_input_name"
              type="text"
              placeholder="Prenom..."
            />
          </div>

          <button className="bg_like">
            <img className="card_icon_small" src={like} alt="like" />
          </button>
          <button onClick={closeLike} className="card_comment_close_btn">
            x
          </button>
        </div>
      </div>

      {/* --------COMMENTS--------------- */}
      <div
        className={
          // showComment
          showNewCommentAndLastTwo
            ? "card_comments_container"
            : "card_comments_container hidden"
        }
      >
        {/*------- New Comment------ */}
        <div id="comment_form" className="card_comment">
          <div className="card_comment_name">
            {/* -----LN-------- */}
            <input
              id="comment_LN"
              onChange={matchLastName}
              className={
                isLNBorderRed
                  ? "card_comment_input card_comment_input_name border_red"
                  : "card_comment_input card_comment_input_name"
              }
              type="text"
              placeholder="Nom..."
            />
            {/* ------FN--------*/}
            <input
              id="comment_FN"
              // onChange={(e) => MatchFirstName(e)}
              onChange={matchFirstName}
              className={
                isFNBorderRed
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
                isCommentBorderRed
                  ? "card_comment_textarea border_red"
                  : "card_comment_textarea"
              }
              type="text"
              placeholder="Laisez un commentaire..."
            />
            <button
              type="submit"
              className="card_comment_send"
              // onClick={commentPost && newData}
              onClick={commentPost}
            >
              <img className="card_icon_send" src={sendComment} alt="envoyer" />
            </button>
          </div>
          <button onClick={closeComments} className="card_comment_close_btn">
            x
          </button>
        </div>

        <div
          className={
            showNewCommentAndLastTwo
              ? "card_all_comments"
              : "card_all_comments hidden"
          }
        >
          {/* {data */}
          {filteredComments
            .map((comment) => {
              // const compareId = comment.project === id;
              return isLoading ? (
                <Loader key={uuidv4()} />
              ) : (
                // compareId && (
                <div key={uuidv4()} className="card_comment_bd">
                  <div className="card_comment_bd_title">
                    <h3 className="card_comment_bd_h3">
                      {comment.lastName} {comment.firstName}{" "}
                    </h3>
                    <span>
                      <strong>le:</strong> {comment.createdAt.slice(0, 10)}{" "}
                      <strong> à: </strong> {comment.createdAt.slice(11, 19)}
                    </span>
                  </div>
                  <p className="card_comment_p">{comment.commentTxt}</p>
                </div>
              );
            })
            .slice(0, 2)}
        </div>

        <div
          className={
            showAllComments ? "view_all_comments hidden" : "view_all_comments"
          }
          onClick={openAllComments}
        >
          <h3 className="card_comment_h3">Voir tous les commentaires</h3>

          <img className="icon_arrow_down" src={down} alt="arrow down" />
        </div>
        <div
          className={
            showAllComments ? "card_all_comments" : "card_all_comments hidden"
          }
        >
          {/* {data */}
          {filteredComments
            .map((comment) => {
              // const compareId2 = comment.project === id;
              return isLoading ? (
                <Loader key={uuidv4()} />
              ) : (
                // compareId2 && (
                <div key={uuidv4()} className="card_comment_bd">
                  <div className="card_comment_bd_title">
                    <h3 className="card_comment_bd_h3">
                      {comment.lastName} {comment.firstName}{" "}
                    </h3>
                    <span>
                      <strong>le:</strong> {comment.createdAt.slice(0, 10)}{" "}
                      <strong> à: </strong> {comment.createdAt.slice(11, 19)}
                    </span>
                  </div>
                  <p className="card_comment_p">{comment.commentTxt}</p>
                </div>
              );
            })
            .slice(2, 99)}
        </div>
      </div>
    </div>
  );
}
export default CardProject;

CardProject.defaultProps = {
  image: DefaultImage,
  info: ["Info"],
};

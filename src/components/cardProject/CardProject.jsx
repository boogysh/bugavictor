import React, { useState, useEffect } from "react";
import DefaultImage from "../../assets/imgDefault.png"; //?????
import "./cardProject.css";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import sendComment from "../../assets/send-comment2.png";
import down from "../../assets/down.png";
import { UseFetch } from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader/Loader";
import axios from "axios";
import LikeAndCommentCard from "./_cardProject/likeAndCommentCard";
import useFormComment from "../../hooks/useForm/useFormComment";

function CardProject({ images, title, info, id }) { 
  console.log('TEST')  
  const [liked, setLiked] = useState(false);
  const [uri, setUri] = useState();
  const [show, setShow] = useState({
    likes: false,
    newCommentAndLastTwo: false,
    allComments: false,
  });
  const [commentsQty, setCommentsQty] = useState(0);
  const [statePage, setStatePage] = useState(0);
  const [filteredComments, setFilteredComments] = useState([]);
  //axios IP
  const [ip, setIP] = useState("");
  
  // console.log(ip);
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
  
  useEffect(() => {
    const result = data.filter((comment) => comment.project === id);
    setCommentsQty(result.length);
    setFilteredComments(result);
  }, [data, id]);

// Open and close  a few comments-----------------------------
  const openComments = () => {
    setShow((show) => ({ ...show, newCommentAndLastTwo: true }));
    setStatePage(statePage + 1);
  };
  const closeComments = () => {
    setShow((show) => ({ ...show, newCommentAndLastTwo: false }));
    setShow((show) => ({ ...show, allComments: false }));
  };
  // Open and close all comments
  const openAllComments = () => {
    setShow((show) => ({ ...show, newCommentAndLastTwo: true }));
    setShow((show) => ({ ...show, allComments: true }));
  };
  //------------------------------------------------------------------
  useEffect(() => {
    const href_arch = window.location.href.includes("/architecture");
    const href_bat = window.location.href.includes("/batiment");
    href_arch && setUri("architecture");
    href_bat && setUri("batiment");
  }, []);
  //--------MATCH FIRST-NAME, MATCH-LAST-NAME, MATCH-COMMENT---------------
  const {
    matchFN,
    matchLN,
    matchComment,
    borderRedFunc,
    resetValues,
    val,
    borderRed,
  } = useFormComment();
  //-------COMMENT-POST-CONTENT------------
  const commentToPost = {
    firstName: `${val.firstName}`,
    lastName: `${val.lastName}`,
    commentTxt: `${val.comment}`,
    project: `${id}`,
  };
  //-------LIKE-POST-CONTENT--------------
  const likeToPost = {
    project: `${id}`,
    ip: `${ip}`,
  };

  //------------------------------------
  const likePost = () => {
    if (ip && id) {
      const fetchLikePost = fetch("http://localhost:4000/api/likes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(likeToPost),
      });
      const cleanAndRefresh = async () => {
        await fetchLikePost;
        setLiked(!liked);
        setStatePage(statePage + 1);
      };
      cleanAndRefresh();
    } else return;
  };
  //------------------------------------
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
  //------------------
  return (
    <div className="card_wrapper">
      <div className="card">
        {/* ------------------------???img_container??? */}
        <div className="card_img_container">
          <div className="slider_wrapper">
            <Slider slides={images} />
          </div>
          <LikeAndCommentCard
            id={id}
            openAllComments={openAllComments}
            liked={liked}
            likePost={likePost}
            openComments={openComments}
            commentsQty={commentsQty}
            statePage={statePage}
          />
        </div>
        <Link to={`/${uri}/${id}`} className="card__link">
          <div
            className={
              show.likes || show.newCommentAndLastTwo
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
      {/* --------COMMENTS--------------- */}
      <div
        className={
          show.newCommentAndLastTwo
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
              onChange={matchLN}
              className={
                // isLN_Red
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

        <div
          className={
            show.newCommentAndLastTwo
              ? "card_all_comments"
              : "card_all_comments hidden"
          }
        >
          {filteredComments
            .map((comment) => {
              return isLoading ? (
                <Loader key={uuidv4()} />
              ) : (
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
            show.allComments ? "view_all_comments hidden" : "view_all_comments"
          }
          onClick={openAllComments}
        >
          <h3 className="card_comment_h3">Voir tous les commentaires</h3>

          <img className="icon_arrow_down" src={down} alt="arrow down" />
        </div>
        <div
          className={
            show.allComments ? "card_all_comments" : "card_all_comments hidden"
          }
        >
          {filteredComments
            .map((comment) => {
              return isLoading ? (
                <Loader key={uuidv4()} />
              ) : (
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

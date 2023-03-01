import React from 'react'
import Loader from "../../loader/Loader";
import { v4 as uuidv4 } from "uuid";
import down from "../../../assets/down.png";


export default function ShowAllComments({show_allComments, openAllComments, filteredComments,isLoading}) {
  return (
    <div>
        <div
          className={
            show_allComments ? "view_all_comments hidden" : "view_all_comments"
          }
          onClick={openAllComments}
        >
          <h3 className="card_comment_h3">Voir tous les commentaires</h3>
          <img className="icon_arrow_down" src={down} alt="arrow down" />
        </div>
        <div
          className={
            show_allComments ? "card_all_comments" : "card_all_comments hidden"
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
  )
}

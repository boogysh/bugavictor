// import { useState, useEffect } from "react";
import { useState } from "react";

const useFormComment = () => {
  // const [isCommentValues, setCommentValues] = useState("");
  
  //
  const [isFN, setFN] = useState("");
  const [isLN, setLN] = useState("");
  const [isComment, setComment] = useState("");
  //
  const [isFN_Red, setFN_Red] = useState(false);
  const [isLN_Red, setLN_Red] = useState(false);
  const [isComment_Red, setComment_Red] = useState(false);
  //

  //-----MATCH FIRST NAME
  const matchFN = (e) => {
    const val = e.target.value;
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) setFN_Red(false);
    else if (val.length < 3 || val.length > 25) {
      setFN("");
      setFN_Red(true);
    } else if (matched) {
      setFN(val);
      setFN_Red(false);
    } else if (!matched) {
      setFN("");
      setFN_Red(true);
    }
  };
  //-----MATCH LAST NAME---------
  const matchLN = (e) => {
    const val = e.target.value;
    const matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) setLN_Red(false);
    else if (val.length < 3 || val.length > 25) {
      setLN("");
      setLN_Red(true);
    } else if (matched) {
      setLN(val);
      setLN_Red(false);
    } else if (!matched) {
      setLN("");
      setLN_Red(true);
    }
  };
  //-------MATCH COMMENT------
  const matchComment = (e) => {
    const val = e.target.value;
    const matched = val.match(
      /^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]+$/
    );
    if (val.length === 0) setComment_Red(false);
    else if (val.length < 3) {
      setComment("");
      setComment_Red(true);
    } else if (matched) {
      setComment(val);
      setComment_Red(false);
    } else if (!matched) {
      setComment("");
      setComment_Red(true);
    }
  };

  //-----RESET ALL INPUT VALUES
  const resetValues = () => {
    // Array.from(document.querySelectorAll('input'));.
    const commentInput = document.querySelectorAll("input");
    commentInput.forEach((input) => (input.value = ""));
    const commentTextarea = document.querySelectorAll("textarea");
    commentTextarea.forEach((input) => (input.value = ""));
    return (commentInput.value = "") && (commentTextarea.value = "");
  };
  //------SET BORDER RED
  const borderRed = () => {
    if (!isFN) setFN_Red(true);
    if (!isLN) setLN_Red(true);
    // if (!isComment) setComment_Red(true);
    else return;
  };
  return {borderRed, resetValues, matchFN, matchLN, matchComment, isFN, isFN_Red, isLN, isLN_Red, isComment, isComment_Red};
};

export default useFormComment;

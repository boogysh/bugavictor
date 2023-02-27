// import { useState, useEffect } from "react";
import { useState } from "react";

const useFormComment = () => {
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    comment: "",
  });
  const [borderRed, setBorderRed] = useState({
    firstName: false,
    lastName: false,
    comment: false,
  });
  //-----MATCH FIRST NAME
  const matchFN = (e) => {
    const value = e.target.value;
    const matched = value.match(/^[a-z A-Z]{3,25}$/);
    if (value.length === 0) setBorderRed({ ...borderRed, firstName: false });
    else if (value.length < 3 || value.length > 25) {
      setVal({ ...val, firstName: "" });
      setBorderRed({ ...borderRed, firstName: true });
    } else if (matched) {
      setVal({ ...val, firstName: value });
      setBorderRed({ ...borderRed, firstName: false });
    } else if (!matched) {
      setVal({ ...val, firstName: "" });
      setBorderRed({ ...borderRed, firstName: true });
    }
  };
  //-----MATCH LAST NAME---------
  const matchLN = (e) => {
    const value = e.target.value;
    const matched = value.match(/^[a-z A-Z]{3,25}$/);
    if (value.length === 0) setBorderRed({ ...borderRed, lastName: false });
    else if (value.length < 3 || value.length > 25) {
      setVal({ ...val, lastName: "" });
      setBorderRed({ ...borderRed, lastName: true });
    } else if (matched) {
      setVal({ ...val, lastName: value });
      setBorderRed({ ...borderRed, lastName: false });
    } else if (!matched) {
      setVal({ ...val, lastName: "" });
      setBorderRed({ ...borderRed, lastName: true });
    }
  };
  //-------MATCH COMMENT------
  const matchComment = (e) => {
    const value = e.target.value;
    const matched = value.match(
      /^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]+$/
    );
    if (value.length === 0) setBorderRed({ ...borderRed, comment: false });
    else if (value.length < 3) {
      setVal({ ...val, comment: "" });
      setBorderRed({ ...borderRed, comment: true });
    } else if (matched) {
      setVal({ ...val, comment: value });
      setBorderRed({ ...borderRed, comment: false });
    } else if (!matched) {
      setVal({ ...val, comment: "" });
      setBorderRed({ ...borderRed, comment: true });
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
  const borderRedFunc = () => {
    if (!val.firstName) setBorderRed({ ...borderRed, firstName: true });
    if (!val.lastName) setBorderRed({ ...borderRed, lastName: true });
    if (!val.comment) setBorderRed({ ...borderRed, comment: true });
    else return;
  };
  return {
    matchFN,
    matchLN,
    matchComment,
    borderRedFunc,
    resetValues,
    val,
    borderRed,
  };
};

export default useFormComment;

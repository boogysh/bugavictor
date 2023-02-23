import { useState, useEffect } from "react";

export function MatchFirstName(e) {
  const [isFN, setFN] = useState("");
  const [isFNBorderRed, setFNBorderRed] = useState(false);

  // function matchFN(e) {
    
  // }

  useEffect(() => {
    // matchFN(e);

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


  }, [isFN, isFNBorderRed,e]);
  return { isFN, isFNBorderRed, setFNBorderRed};
}

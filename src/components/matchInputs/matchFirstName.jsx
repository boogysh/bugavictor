// import {useEffect } from "react";
// import { useState} from "react";

// export function MatchFirstName(props) {
//   // const [isFN, setFN] = useState("");
//   // const [isFNBorderRed, setFNBorderRed] = useState(false);

//   const matchFN = (props) => {
//     // const val = props.e.target.value;
//     const val = props.value;
//     const matched = val.match(/^[a-z A-Z]{3,25}$/);
//     if (val.length === 0) props.setFNBorderRed(false);
//     else if (val.length < 3 || val.length > 25) {
//       props.setFN("");
//       props.setFNBorderRed(true);
//     } else if (matched) {
//       props.setFN(val);
//       props.setFNBorderRed(false);
//     } else if (!matched) {
//       props.setFN("");
//       props.setFNBorderRed(true);
//     }
//     return matched;
//   };

//   useEffect(() => {
//     matchFN(props);
//   }, [ props]);

//   return ;
// }

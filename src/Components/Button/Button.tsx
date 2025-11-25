// import clsx from "clsx";
// import css from "../Button.module.css";
// import { useState } from "react";

// // const clickMe = () => {
// //     alert("Button clicked!");
// // }

// interface ButtonProps {
//     variant?: "primary" | "secondary";
//     text: string;
// }

// export default function Button({variant, text}: ButtonProps) {
//     const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//     return(
//         <>
//         <button onClick={handleClick}  className={clsx(css.button, variant && css[variant])}>{text}</button>
//         <p>{clicks}</p>
//         </>
//     )
// }

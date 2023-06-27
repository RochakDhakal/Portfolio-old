import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../style.css"
function BlobAnimation() {
  const [text] = useTypewriter({
    words: [
      "< Rochak Dhakal />",
      "< Frontend Developer />",
      "< Based In Nepal />",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <div className="">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="40vw"
        id="blobSvg"
        transform="rotate(0)"
        style={{ opacity: 1 }}
        filter="blur(0px)"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(50,115,97)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(2, 238, 242)" }} />
          </linearGradient>
        </defs>
        <defs>
          
        </defs>
        <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z"
          ></animate>
        </path>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgb(33,37,41)"
          fontSize="2rem"
          fontWeight="bold"
          fontFamily="Arial"
         
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default BlobAnimation;

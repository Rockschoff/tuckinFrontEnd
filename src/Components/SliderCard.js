import React from "react";
import "./SliderCard.css";

function SliderCard({ heading, content }) {
  const [style, setStyle] = React.useState({
    animationName: "close",
    animationDuration: "0s",
    animationFillMode: "forwards",
  });

  // const [clicked, setClicked] = React.useState(false);

  function showContent() {
    if (style.animationName === "close") {
      setStyle({
        animationName: "open",
        animationDuration: "1s",
        animationFillMode: "forwards",
      });
    } else {
      setStyle({
        animationName: "close",
        animationDuration: "1s",
        animationFillMode: "forwards",
      });
    }
  }
  return (
    <div className="slider-wrapper">
      <div className="slide-heading" onClick={showContent}>
        {heading}
      </div>
      <div className="slide-content" style={style}>
        <p className="slide-content-para">{content}</p>
      </div>
    </div>
  );
}

export default SliderCard;

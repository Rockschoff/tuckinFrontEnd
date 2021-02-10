import React from "react";
import "./SliderCard.css";

function SliderCard({ heading, content }) {
  const [display, setDisplay] = React.useState({
    height: "1px",
    transiton: "all 0.5s ease",
  });
  function showContent() {
    if (display.height === "1px") {
      setDisplay({ height: "289px" });
    } else {
      setDisplay({ height: "1px" });
    }
  }
  return (
    <div className="slider-wrapper">
      <div className="slide-heading" onClick={showContent}>
        {heading}
      </div>
      <div className="slide-content" style={display}>
        <p className="slide-content-para">{content}</p>
      </div>
    </div>
  );
}

export default SliderCard;

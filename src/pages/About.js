import React from "react";
import "./About.css";
import Form from "../Components/Form.js";
import Footer from "../Components/Footer.js";
import one from "../images/about1.png";
import two from "../images/about2.png";
import textPic1 from "../images/text-pic1.png";
import textPic2 from "../images/text-pic2.png";
import bigImage from "../images/big-image1.png";
import benPic1 from "../images/ben-pic1.png";
import benPic2 from "../images/pic2.png";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="main-heading">
          <h2 className="title1">CleanBamboo™ ,</h2>
          <h2 className="title2">the fabric of our future</h2>
          <p className="title-para1">
            Cotton is known as the "fabric of our lives," but these well-crafted
            words hide an ugly truth.
          </p>
          <p className="title-para2">
            Compared to cotton sheets, out signature cleanBamboo sheet set :.
          </p>
          <div
            className="about-pics"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={one} className="image1" />
            <img src={two} className="image2" />
          </div>
          <div
            className="about-text-pics"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={textPic1} className="text-image1" />
            <img src={textPic2} className="text-image2" />
          </div>
        </div>
        <div className="big-image">
          <img src={bigImage} className="big-image" />
        </div>
        <div className="benefits" style={{ backgroundColor: "#E1D2BE" }}>
          <h2 className="benefits-heading">
            The most resource efficient plant on the planet
            <div
              className="ben-points"
              style={{ backgroundColor: "transparent" }}
            >
              <img src={benPic1} alt="" className="ben-pic1" />
              <img src={benPic2} alt="" className="ben-pic2" />
            </div>
          </h2>
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
}
export default About;

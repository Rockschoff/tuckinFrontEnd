import React from "react";
import "./Popup.css";
import Form from "./Form";

function Popup(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <p>Hi there! Thank you for your interest in our products.</p>
        <p className="space"> </p>
        <p className="sign-up-request">
          We're currently building and will be ready soon. Please share your
          details so that we can let you know when we are live.
        </p>
        <div className="popup-form">
          <Form width={true} />
        </div>
        <p className="space"> </p>

        <p>
          Sorry for the inconvinience and thank you for your support and time :)
        </p>
      </div>
    </div>
  );
}

export default Popup;

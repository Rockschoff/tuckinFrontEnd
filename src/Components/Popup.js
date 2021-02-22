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
        <p>Hi there! Thanks alot for showing interest in our products.</p>
        <p className="space"> </p>
        <p className="sign-up-request1">
          We are launching soon and would love to nav you as one of our first
          customers.
        </p>
        <p className="space"> </p>
        <p className="sign-up-request">
          Please share you details below and we we promise to give a callback
          when we are ready to serve you.
        </p>
        <div className="popup-form">
          <Form width={true} />
        </div>
        <p className="space"> </p>
      </div>
    </div>
  );
}

export default Popup;

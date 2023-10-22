/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ className, subtract = "/static/img/subtract-4.svg", ellipse = "/static/img/ellipse-4-1.svg" }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="overlap">
        <img className="subtract" alt="Subtract" src={subtract} />
        <img className="img" alt="Subtract" src="/static/img/subtract-3.svg" />
      </div>
      <div className="overlap-group">
        <img className="ellipse" alt="Ellipse" src={ellipse} />
      </div>
    </div>
  );
};

Frame.propTypes = {
  subtract: PropTypes.string,
  ellipse: PropTypes.string,
};

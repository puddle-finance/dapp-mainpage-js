/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyBtWrapper = ({ property1, className }) => {
  return (
    <div className={`property-bt-wrapper ${property1} ${className}`}>
      <div className="frame-8">
        <div className="div-2">
        <a href="https://dapp-ts.vercel.app">
          {property1 === "main-bt" && <>Access App</>}
        </a>
          {property1 === "second-bt" && <a href="https://github.com/puddle-finance/puddle-move/blob/master/README.md"> Documentation</a>}
        </div>
      </div>
    </div>
  );
};

PropertyBtWrapper.propTypes = {
  property1: PropTypes.oneOf(["main-bt", "second-bt"]),
};

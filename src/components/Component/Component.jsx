import PropTypes from "prop-types";
import React from "react";
import { DiscordIcon } from "../../icons/DiscordIcon";
import { Frame } from "../Frame";
import "./style.css";

export const Component = ({
  property1,
  className,
  frameSubtract = "/static/img/subtract-4.svg",
  frameEllipse = "/static/img/ellipse-4-1.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className="div">
        {property1 === "component-21" && (
          <>
            <div className="frame-3">
              <Frame className="logo" ellipse={frameEllipse} subtract={frameSubtract} />
              <p className="p">
                <span className="text-wrapper">Puddle </span>
                <span className="span">Finance</span>
              </p>
              
            </div>
            <DiscordIcon className="social-icons" />
          </>
        )}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["component-22", "component-21"]),
  frameSubtract: PropTypes.string,
  frameEllipse: PropTypes.string,
};

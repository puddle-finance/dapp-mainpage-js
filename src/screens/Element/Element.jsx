import React from "react";
import { Component } from "../../components/Component";
import { PropertyBtWrapper } from "../../components/PropertyBtWrapper";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="overlap-group-wrapper">
          <div className="frame-9">
            <div className="frame-10">
              <Component
                className="component-instance"
                frameEllipse="/static/img/ellipse-4.svg"
                frameSubtract="/static/img/subtract-2.svg"
                property1="component-21"
              />
              <div className="content">
                <div className="frame-11">
                  <p className="a-water-droplet-come">
                    A water droplet, <br />
                    come together
                  </p>
                  <p className="puddle-finance-is-a">
                    Puddle Finance is a decentralized fund platform on SUI network, where traders, businesses, or senior
                    investors can create funds using Puddle Finance.
                    <br />
                    Users can entrust their assets to trusted funds for investment, and when the funds generate profits,
                    they are shared with the investors.
                  </p>
                  <div className="frame-12">
                  <a href="https://puddle-finance-dapp.vercel.app/">
                    <PropertyBtWrapper className="component-instance" property1="main-bt" />
                  </a>
                  <a href="https://github.com/puddle-finance/puddle-move/blob/master/README.md">
                    <PropertyBtWrapper className="component-instance" property1="second-bt" />
                  </a>  
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

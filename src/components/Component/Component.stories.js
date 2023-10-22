import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["component-22", "component-21"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-22",
    className: {},
    frameSubtract: "/static/img/subtract-4.svg",
    frameEllipse: "/static/img/ellipse-4-1.svg",
  },
};

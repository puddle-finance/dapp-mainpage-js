import { PropertyBtWrapper } from ".";

export default {
  title: "Components/PropertyBtWrapper",
  component: PropertyBtWrapper,
  argTypes: {
    property1: {
      options: ["main-bt", "second-bt"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "main-bt",
    className: {},
  },
};

import React from "react";

import { OldButton } from "./OldButton";

export default {
  title: "Example/OldButton",
  component: OldButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <OldButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "OldButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "OldButton",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "OldButton",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "OldButton",
};

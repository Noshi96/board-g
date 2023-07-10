import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "ui";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    size: { control: "radio", options: ["small", "large"] },
    label: { control: "Label" },
  },
} as ComponentMeta<typeof Button>;

const tempOnClick = () => alert("boop");

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  primary: true,
  size: "large",
  onClick: tempOnClick,
};

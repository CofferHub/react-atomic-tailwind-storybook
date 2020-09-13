import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./index";

export default {
  title: "Atoms/Texts",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const BasicText = Template.bind({});
BasicText.args = {
  label: "Basic Text",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  label:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus ex repellendus incidunt, perspiciatis labore eveniet aspernatur? Eveniet officiis maxime repellendus, voluptatum earum, eos maiores, ipsum temporibus in voluptate illum.",
  color: "#353535",
};

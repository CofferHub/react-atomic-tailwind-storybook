import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./index";

export default {
	title: "Molecules/Layout/Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

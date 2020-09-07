import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./index";

export default {
	title: "Molecules/Cards",
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardItem = Template.bind({});

CardItem.args = {
	children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ad dolores, tempora officia minus autem. In cupiditate, ut, ratione, quis voluptate voluptates corporis quo enim dolore corrupti itaque omnis obcaecati!</p>,
}

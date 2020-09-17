import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Checkbox, CheckboxProps } from "./index";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({})
BasicCheckbox.args = {
	
}
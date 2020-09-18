import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputProps, Input } from './index';

export default {
	title: 'Atoms/Inputs',
	component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
	placeholder: 'Type a text',
};



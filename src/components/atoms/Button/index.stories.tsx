import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
    title: 'Atoms/Buttons',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Extra = Template.bind({});
Extra.args = {
    size: 'extra',
    label: 'Button',
};

export const RectanglePrimary = Template.bind({});
RectanglePrimary.args = {
    primary: true,
    label: 'Button',
    borderRadius: '0em',
};

export const RectangleSecondary = Template.bind({});
RectangleSecondary.args = {
    label: 'Button',
    borderRadius: '0em',
};

export const RectangleSmall = Template.bind({});
RectangleSmall.args = {
    label: 'Button',
    borderRadius: '0em',
    size: 'small',
};

export const RectangleLarge = Template.bind({});
RectangleLarge.args = {
    label: 'Button',
    borderRadius: '0em',
    size: 'large',
};

export const RectangleExtra = Template.bind({});
RectangleExtra.args = {
    label: 'Button',
    borderRadius: '0em',
    size: 'extra',
};

export const TransparentButton = Template.bind({});
TransparentButton.args = {
    label: 'Button',
    backgroundColor: 'transparent',
};

export const LabelButton = Template.bind({});
LabelButton.args = {
    label: 'Button',
    borderRadius: '0em',
    backgroundColor: 'transparent',
    boxShadow: 'none',
};



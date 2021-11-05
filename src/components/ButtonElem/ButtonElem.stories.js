import React from 'react';

import ButtonElem from './ButtonElem';

export default {
  title: 'TriDyme/Button',
  component: ButtonElem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonElem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Analysis',
};
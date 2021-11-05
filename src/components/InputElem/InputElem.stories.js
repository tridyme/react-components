import { Description } from '@material-ui/icons';
import React from 'react';

import InputElem from './InputElem';

export default {
  title: 'TriDyme/InputElem',
  component: InputElem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <InputElem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    text: "b",
    value: 3,
    description: "largeur de la section",
    unit: "m"
  },
};
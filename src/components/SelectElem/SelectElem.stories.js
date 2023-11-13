import { Description } from '@material-ui/icons';
import React from 'react';

import SelectElem from './SelectElem';

export default {
  title: 'TriDyme/SelectElem',
  component: SelectElem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SelectElem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    label: "Appuis",
    value: "Encastre",
    list: [
      { id: "Encastre", name: "Encastrement" },
      { id: "Libre", name: "Libre" },
      { id: "Appuie", name: "Rotule" },
    ]
  },
};
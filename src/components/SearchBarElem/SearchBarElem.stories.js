import React from 'react';

import SearchBarElem from './SearchBarElem';

export default {
  title: 'TriDyme/SearchBarElem',
  component: SearchBarElem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SearchBarElem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    input: '',
    placeholder: "Example of search element",
    disabled: false,
  },
};
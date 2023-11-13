import React from 'react';

import CardElem from './CardElem';

export default {
  title: 'TriDyme/CardElem',
  component: CardElem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <CardElem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: <h3>Content</h3>,
  },
};
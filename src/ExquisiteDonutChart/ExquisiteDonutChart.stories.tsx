import React from 'react';

import ExquisiteDonutChart from './ExquisiteDonutChart';

const data = [
  { date: 'Cats', value: 35 },
  { date: 'Dogs', value: 40 },
  { date: 'Birds', value: 55 },
  { date: 'Cows', value: 50 },
  { date: 'Bulls', value: 20 },
  { date: 'Fish', value: 45 },
];

export default {
  title: 'Example/ExquisiteDonutChart',
  component: ExquisiteDonutChart,
};

const Template = (args) => <ExquisiteDonutChart {...args} />;

export const WithColorScale = Template.bind({});
WithColorScale.args = {
  data,
  colorScale: ['blue', 'purple', 'red', 'orange', 'yellow', 'green'],
};

export const WithGradientColorScale = Template.bind({});
WithGradientColorScale.args = {
  data,
  gradientColorScale: [
    ['#000000', '#0000ff'],
    ['#400040', '#800080'],
    ['#7f0000', '#ff0000'],
    ['#7f4600', '#ff8c00'],
    ['#7f7f00', '#ffff00'],
    ['#007f00', '#00ff00'],
  ],
};

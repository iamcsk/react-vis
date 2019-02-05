import React from 'react';

import {setAddon, storiesOf} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

import {
  withKnobs,
  color,
  number,
  object,
  select,
  text
} from '@storybook/addon-knobs/react';

import {LineMarkSeries} from 'react-vis';

import {generateLinearData, nonUniformX} from './storybook-data.js';
import {SimpleChartWrapper, jsxOptions} from './storybook-utils.js';


storiesOf('Series/LineMarkSeries/Base', module)
  .addDecorator(withKnobs)
  .addWithJSX(
    'Linemark Series',
    () => {
      return (
        <SimpleChartWrapper>
          <LineMarkSeries
            onSeriesMouseOver={(e) => {
              console.log(' CSK onSeriesMouseOver ', e);
            }}
            onValueMouseOver={(v, e) => {
              console.log(' CSK onValueMouseOver ', v, e);
            }}
            onValueClick={() => {
              console.log(' CSK onValueClick ');
            }}
            data={generateLinearData({key: 'line1'})} />
        </SimpleChartWrapper>
      );
    },
    jsxOptions
  )

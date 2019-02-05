import {setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

import '../../dist/style.css';
import '../.storybook/storybook.css';

import './areaseries-story';
import './barseries-story';
import './lineseries-story';
import './linemark-series-story';
import './markseries-story';
import './radial-story';

import './axis-story';
import './legend-story';

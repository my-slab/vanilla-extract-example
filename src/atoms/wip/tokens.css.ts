import colors from 'tailwindcss/colors';
import { createGlobalTheme } from '@vanilla-extract/css';
import { modularScale } from 'polished';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const borderRadiusScale = createScale(1.5, 4);

export const colorValues = {
  black: '#000',
  white: '#fff',
  current: 'currentColor',
  transparent: 'transparent',

  'gray-50': colors.coolGray[50],
  'gray-100': colors.coolGray[100],
  'gray-200': colors.coolGray[200],
  'gray-300': colors.coolGray[300],
  'gray-400': colors.coolGray[400],
  'gray-500': colors.coolGray[500],
  'gray-600': colors.coolGray[600],
  'gray-700': colors.coolGray[700],
  'gray-800': colors.coolGray[800],
  'gray-900': colors.coolGray[900],

  'red-50': colors.red[50],
  'red-100': colors.red[100],
  'red-200': colors.red[200],
  'red-300': colors.red[300],
  'red-400': colors.red[400],
  'red-500': colors.red[500],
  'red-600': colors.red[600],
  'red-700': colors.red[700],
  'red-800': colors.red[800],
  'red-900': colors.red[900],

  'yellow-50': colors.amber[50],
  'yellow-100': colors.amber[100],
  'yellow-200': colors.amber[200],
  'yellow-300': colors.amber[300],
  'yellow-400': colors.amber[400],
  'yellow-500': colors.amber[500],
  'yellow-600': colors.amber[600],
  'yellow-700': colors.amber[700],
  'yellow-800': colors.amber[800],
  'yellow-900': colors.amber[900],

  'green-50': colors.emerald[50],
  'green-100': colors.emerald[100],
  'green-200': colors.emerald[200],
  'green-300': colors.emerald[300],
  'green-400': colors.emerald[400],
  'green-500': colors.emerald[500],
  'green-600': colors.emerald[600],
  'green-700': colors.emerald[700],
  'green-800': colors.emerald[800],
  'green-900': colors.emerald[900],

  'blue-50': colors.blue[50],
  'blue-100': colors.blue[100],
  'blue-200': colors.blue[200],
  'blue-300': colors.blue[300],
  'blue-400': colors.blue[400],
  'blue-500': colors.blue[500],
  'blue-600': colors.blue[600],
  'blue-700': colors.blue[700],
  'blue-800': colors.blue[800],
  'blue-900': colors.blue[900],

  'indigo-50': colors.indigo[50],
  'indigo-100': colors.indigo[100],
  'indigo-200': colors.indigo[200],
  'indigo-300': colors.indigo[300],
  'indigo-400': colors.indigo[400],
  'indigo-500': colors.indigo[500],
  'indigo-600': colors.indigo[600],
  'indigo-700': colors.indigo[700],
  'indigo-800': colors.indigo[800],
  'indigo-900': colors.indigo[900],

  'purple-50': colors.purple[50],
  'purple-100': colors.purple[100],
  'purple-200': colors.purple[200],
  'purple-300': colors.purple[300],
  'purple-400': colors.purple[400],
  'purple-500': colors.purple[500],
  'purple-600': colors.purple[600],
  'purple-700': colors.purple[700],
  'purple-800': colors.purple[800],
  'purple-900': colors.purple[900],

  'pink-50': colors.pink[50],
  'pink-100': colors.pink[100],
  'pink-200': colors.pink[200],
  'pink-300': colors.pink[300],
  'pink-400': colors.pink[400],
  'pink-500': colors.pink[500],
  'pink-600': colors.pink[600],
  'pink-700': colors.pink[700],
  'pink-800': colors.pink[800],
  'pink-900': colors.pink[900],
};

function toPercentage(n: number) {
  return `${n * 100}%`;
}
let percentageValues = {};
[
  '1/2',
  '1/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
].forEach((v) => {
  let [a, b] = v.split('/');
  percentageValues[v] = toPercentage(Number(a) / Number(b));
});

export const widthValues = {
  auto: 'auto',
  ...percentageValues,
  full: '100%',
  screen: '100vw',
  min: 'min-content',
  max: 'max-content',
};

export const minWidthValues = {
  0: '0px',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
};

export const maxWidthValues = {};

export const dimensionValues = {
  'size-0': '0px',
  'size-10': '1px',
  'size-25': '2px',
  'size-40': '3px',
  'size-50': '4px',
  'size-65': '5px',
  'size-75': '6px',
  'size-85': '7px',
  'size-100': '8px',
  'size-115': '9px',
  'size-125': '10px',
  'size-130': '11px',
  'size-150': '12px',
  'size-160': '13px',
  'size-175': '14px',
  'size-200': '15px',
  'size-225': '18px',
  'size-250': '20px',
  'size-300': '24px',
  'size-350': '28px',
  'size-400': '32px',
  'size-450': '36px',
  'size-500': '40px',
  'size-550': '44px',
  'size-600': '48px',
  'size-675': '54px',
  'size-700': '56px',
  'size-800': '64px',
  'size-900': '72px',
  'size-1000': '80px',
  'size-1250': '100px',
  'size-1600': '128px',
  'size-1700': '136px',
  'size-2000': '160px',
  'size-2400': '192px',
  'size-3000': '240px',
  'size-3400': '272px',
  'size-3600': '288px',
  'size-4600': '368px',
  'size-5000': '400px',
  'size-6000': '480px',
};

const borderRadiusValues = {
  none: '0',
  xsmall: borderRadiusScale(0),
  small: borderRadiusScale(1),
  medium: borderRadiusScale(2),
  large: borderRadiusScale(3),
  xlarge: borderRadiusScale(4),
  full: '9999px',
};

const borderSizeValues = {
  none: '0',
  thin: dimensionValues['size-10'],
  thick: dimensionValues['size-25'],
  thicker: dimensionValues['size-50'],
  thickest: dimensionValues['size-100'],
};

export const tokens = createGlobalTheme(':root', {
  borderRadiusValues,
  borderSizeValues,
  colorValues,
  dimensionValues,
  widthValues,
});

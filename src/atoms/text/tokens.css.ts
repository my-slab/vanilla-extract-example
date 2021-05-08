import { colorValues, createScale } from '../helpers.css';

const fontFamilyValues = {
  sans:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
  mono:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
};

const fontSizeScale = createScale(1.125, 16);
const fontSizeValues = {
  'font-25': fontSizeScale(-3),
  'font-50': fontSizeScale(-2),
  'font-75': fontSizeScale(-1),
  'font-100': fontSizeScale(1),
  'font-200': fontSizeScale(2),
  'font-300': fontSizeScale(3),
  'font-400': fontSizeScale(4),
  'font-500': fontSizeScale(5),
  'font-600': fontSizeScale(6),
  'font-700': fontSizeScale(7),
  'font-800': fontSizeScale(8),
  'font-900': fontSizeScale(9),
  'font-1000': fontSizeScale(10),
};

const fontStyleValues = {
  italic: 'italic',
  normal: 'normal',
};

const fontWeightValues = {
  normal: '400',
  semibold: '600',
};

const letterSpacingValues = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

const textAlignValues = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
};

const textColorValues = {
  ...colorValues,
};

const textDecorationValues = {
  underline: 'underline',
  thru: 'line-through',
  none: 'none',
};

const textTransformValues = {
  upper: 'uppercase',
  lower: 'lowercase',
  title: 'capitalize',
  none: 'none',
};

export const textValues = {
  fontFamilyValues,
  fontSizeValues,
  fontWeightValues,
  fontStyleValues,
  letterSpacingValues,
  textAlignValues,
  textColorValues,
  textDecorationValues,
  textTransformValues,
};

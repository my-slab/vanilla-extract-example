import { colorValues } from '../helpers.css';

const fontFamilyValues = {
  sans:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
  mono:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
};

const fontSizeValues = {};

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

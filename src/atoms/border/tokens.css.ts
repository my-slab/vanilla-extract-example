import { colorValues, createScale, dimensionValues } from '../helpers.css';

const borderRadiusScale = createScale(1.5, 4);
const borderRadiusValues = {
  none: '0',
  xsmall: borderRadiusScale(0),
  small: borderRadiusScale(1),
  medium: borderRadiusScale(2),
  large: borderRadiusScale(3),
  xlarge: borderRadiusScale(4),
  full: '9999px',
};

const borderWidthValues = {
  none: '0',
  thin: dimensionValues['size-10'],
  thick: dimensionValues['size-25'],
  thicker: dimensionValues['size-50'],
  thickest: dimensionValues['size-100'],
};

const borderColorValues = colorValues;

const borderStyleValues = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double',
  none: 'none',
};

export const borderValues = {
  borderRadiusValues,
  borderWidthValues,
  borderColorValues,
  borderStyleValues,
};

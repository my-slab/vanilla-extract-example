import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { spacingValues } from './tokens.css';
import { conditions } from '../helpers.css';

export const tokens = createGlobalTheme(':root', {
  ...spacingValues,
});

export const spacingAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    marginBottom: tokens.dimensionValues,
    marginLeft: tokens.dimensionValues,
    marginRight: tokens.dimensionValues,
    marginTop: tokens.dimensionValues,
    paddingBottom: tokens.dimensionValues,
    paddingLeft: tokens.dimensionValues,
    paddingRight: tokens.dimensionValues,
    paddingTop: tokens.dimensionValues,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { textValues } from './tokens.css';
import { conditions } from '../helpers.css';

export const tokens = createGlobalTheme(':root', {
  ...textValues,
});

export const textAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    fontFamily: tokens.fontFamilyValues,
    fontSize: tokens.fontSizeValues,
    fontStyle: tokens.fontStyleValues,
    fontWeight: tokens.fontWeightValues,
    letterSpacing: tokens.letterSpacingValues,
    textAlign: tokens.textAlignValues,
    textDecoration: tokens.textDecorationValues,
    textTransform: tokens.textTransformValues,
  },
});

export const textColorAtoms = createAtomicStyles({
  conditions: {
    ...conditions.modes,
  },
  defaultCondition: 'light',
  properties: {
    color: tokens.textColorValues,
  },
});

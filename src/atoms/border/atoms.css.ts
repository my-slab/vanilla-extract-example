import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { borderValues } from './tokens.css';
import { conditions } from '../helpers.css';

export const tokens = createGlobalTheme(':root', {
  ...borderValues,
});

export const borderAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    borderWidth: tokens.borderWidthValues,
    borderLeftWidth: tokens.borderWidthValues,
    borderRightWidth: tokens.borderWidthValues,
    borderTopWidth: tokens.borderWidthValues,
    borderBottomWidth: tokens.borderWidthValues,
    borderRadius: tokens.borderRadiusValues,
    borderTopLeftRadius: tokens.borderRadiusValues,
    borderTopRightRadius: tokens.borderRadiusValues,
    borderBottomLeftRadius: tokens.borderRadiusValues,
    borderBottomRightRadius: tokens.borderRadiusValues,
    borderStyle: tokens.borderStyleValues,
    borderTopStyle: tokens.borderStyleValues,
    borderBottomStyle: tokens.borderStyleValues,
    borderLeftStyle: tokens.borderStyleValues,
    borderRightStyle: tokens.borderStyleValues,
  },
  shorthands: {
    borderXWidth: ['borderLeftWidth', 'borderRightWidth'],
    borderYWidth: ['borderTopWidth', 'borderBottomWidth'],
    borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    borderXStyle: ['borderLeftStyle', 'borderRightStyle'],
    borderYStyle: ['borderTopStyle', 'borderBottomStyle'],
  },
});

export const borderColorAtoms = createAtomicStyles({
  conditions: {
    ...conditions.modes,
  },
  defaultCondition: 'light',
  properties: {
    borderColor: tokens.borderColorValues,
    borderLeftColor: tokens.borderColorValues,
    borderRightColor: tokens.borderColorValues,
    borderTopColor: tokens.borderColorValues,
    borderBottomColor: tokens.borderColorValues,
  },
  shorthands: {
    borderColor: [
      'borderTopColor',
      'borderBottomColor',
      'borderRightColor',
      'borderLeftColor',
    ],
    borderXColor: ['borderLeftColor', 'borderRightColor'],
    borderYColor: ['borderTopColor', 'borderBottomColor'],
  },
});

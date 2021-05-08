import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { layoutValues } from './tokens.css';
import { conditions } from '../helpers.css';

export const tokens = createGlobalTheme(':root', {
  ...layoutValues,
});

export const layoutAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    boxSizing: tokens.boxSizingValues,
    display: tokens.displayValues,
    overflow: tokens.overflowValues,
    overflowX: tokens.overflowValues,
    overflowY: tokens.overflowValues,
    position: tokens.positionValues,
    visibility: tokens.visibilityValues,
    zIndex: tokens.zIndexValues,
    top: tokens.placementValues,
    right: tokens.placementValues,
    left: tokens.placementValues,
    bottom: tokens.placementValues,
  },
  shorthands: {
    inset: ['top', 'left', 'right', 'bottom'],
    insetX: ['left', 'right'],
    insetY: ['top', 'bottom'],
  },
});

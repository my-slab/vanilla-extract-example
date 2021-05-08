import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { sizingValues } from './tokens.css';
import { conditions } from '../helpers.css';

export const tokens = createGlobalTheme(':root', {
  ...sizingValues,
});

export const sizingAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    width: tokens.widthValues,
    minWidth: tokens.minWidthValues,
    maxWidth: tokens.maxWidthValues,
    height: tokens.heightValues,
    minHeight: tokens.minHeightValues,
    maxHeight: tokens.maxHeightValues,
  },
});

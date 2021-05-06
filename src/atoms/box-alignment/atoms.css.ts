import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { conditions } from '../helpers.css';
import { boxAlignmentValues } from './tokens.css';

export const tokens = createGlobalTheme(':root', {
  ...boxAlignmentValues,
});

export const boxAlignmentAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    justifyItems: tokens.justifyItemValues,
    justifySelf: tokens.justifySelfValues,
    alignSelf: tokens.alignSelfValues,
    placeSelf: tokens.placeSelfValues,
  },
});

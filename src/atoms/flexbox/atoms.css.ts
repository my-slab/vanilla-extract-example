import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { conditions } from '../helpers.css';
import { flexValues } from './tokens.css';

export const tokens = createGlobalTheme(':root', {
  ...flexValues,
});

export const flexboxAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    alignContent: tokens.alignContentValues,
    alignItems: tokens.alignItemsValues,
    flex: tokens.flexValues,
    flexDirection: tokens.flexDirectionValues,
    flexGrow: tokens.flexGrowValues,
    flexShrink: tokens.flexShrinkValues,
    flexWrap: tokens.flexWrapValues,
    gap: tokens.gapValues,
    justifyContent: tokens.justifyContentValues,
    order: tokens.flexOrderValues,
    placeContent: tokens.placeContentValues,
    placeItems: tokens.placeItemsValues,
  },
  shorthands: {
    direction: ['flexDirection'],
  },
});

import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { conditions } from '../helpers.css';
import { backgroundValues } from './tokens.css';

export const tokens = createGlobalTheme(':root', {
  ...backgroundValues,
});

export const backgroundAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    backgroundAttachment: tokens.backgroundAttachmentValues,
    backgroundClip: tokens.backgroundClipValues,
    backgroundPosition: tokens.backgroundPositionValues,
    backgroundRepeat: tokens.backgroundRepeatValues,
    backgroundSize: tokens.backgroundSizeValues,
  },
  shorthands: {},
});

export const backgroundColorAtoms = createAtomicStyles({
  conditions: {
    ...conditions.modes,
  },
  defaultCondition: 'light',
  properties: {
    backgroundColor: tokens.backgroundColorValues,
  },
});

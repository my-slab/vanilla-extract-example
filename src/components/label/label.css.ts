import { composeStyles, style } from '@vanilla-extract/css';

import { createAtomsFn } from '@vanilla-extract/sprinkles';
import { textColorAtoms, textAtoms } from '../../atoms/atoms.css';

export const atoms = createAtomsFn(textAtoms, textColorAtoms);

export let label = composeStyles(
  atoms({
    color: {
      light: 'gray-900',
      dark: 'white',
    },
    fontFamily: 'sans',
  }),
  style({ fontSize: '14px' })
);

export let requirementIndicator = composeStyles(
  atoms({
    color: { light: 'gray-600', dark: 'gray-300' },
  })
);

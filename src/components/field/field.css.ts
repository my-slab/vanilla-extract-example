import { composeStyles, style } from '@vanilla-extract/css';

import { createAtomsFn } from '@vanilla-extract/sprinkles';
import { flexboxAtoms, layoutAtoms } from '../../atoms/atoms.css';

export const atoms = createAtomsFn(layoutAtoms, flexboxAtoms);

export let field = composeStyles(
  atoms({
    display: 'inline-flex',
    flexDirection: 'col',
    gap: 'size-50',
  }),
  style({
    position: 'relative',
  })
);

import { createAtomsFn } from '@vanilla-extract/sprinkles';
import { flexboxAtoms, layoutAtoms } from '../../atoms/atoms.css';

export const atoms = createAtomsFn(layoutAtoms, flexboxAtoms);

export let field = atoms({
  display: 'inline-flex',
  flexDirection: 'col',
  gap: 'size-50',
  position: 'relative',
});

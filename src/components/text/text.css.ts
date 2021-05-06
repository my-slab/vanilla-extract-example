import { createAtomsFn } from '@vanilla-extract/sprinkles';
import { textAtoms, textColorAtoms } from '../../atoms/atoms.css';

export const atoms = createAtomsFn(textAtoms, textColorAtoms);

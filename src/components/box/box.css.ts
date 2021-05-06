import { createAtomsFn } from '@vanilla-extract/sprinkles';
import {
  backgroundAtoms,
  backgroundColorAtoms,
  layoutAtoms,
} from '../../atoms/atoms.css';

export const atoms = createAtomsFn(
  backgroundAtoms,
  backgroundColorAtoms,
  layoutAtoms
);

import { createAtomsFn } from '@vanilla-extract/sprinkles';
import {
  backgroundAtoms,
  backgroundColorAtoms,
  boxAlignmentAtoms,
  layoutAtoms,
} from '../../atoms/atoms.css';

export const atoms = createAtomsFn(
  backgroundAtoms,
  backgroundColorAtoms,
  boxAlignmentAtoms,
  layoutAtoms
);

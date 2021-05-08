import { createAtomsFn } from '@vanilla-extract/sprinkles';
import {
  boxAlignmentAtoms,
  layoutAtoms,
  textAtoms,
  textColorAtoms,
} from '../../atoms/atoms.css';

export const atoms = createAtomsFn(
  boxAlignmentAtoms,
  layoutAtoms,
  textAtoms,
  textColorAtoms
);

import { createAtomsFn } from '@vanilla-extract/sprinkles';
import {
  backgroundAtoms,
  backgroundColorAtoms,
  flexboxAtoms,
  layoutAtoms,
} from '../../atoms/atoms.css';

export const atoms = createAtomsFn(
  backgroundAtoms,
  backgroundColorAtoms,
  flexboxAtoms,
  layoutAtoms
);

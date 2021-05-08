import { createAtomsFn } from '@vanilla-extract/sprinkles';
import {
  backgroundAtoms,
  backgroundColorAtoms,
  borderAtoms,
  borderColorAtoms,
  flexboxAtoms,
  layoutAtoms,
  sizingAtoms,
  spacingAtoms,
} from '../../atoms/atoms.css';

export let atoms = createAtomsFn(
  backgroundAtoms,
  backgroundColorAtoms,
  borderAtoms,
  borderColorAtoms,
  flexboxAtoms,
  layoutAtoms,
  sizingAtoms,
  spacingAtoms
);

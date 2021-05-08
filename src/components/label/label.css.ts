import { createAtomsFn } from '@vanilla-extract/sprinkles';
import { textAtoms, textColorAtoms } from '../../atoms/atoms.css';

export let atoms = createAtomsFn(textAtoms, textColorAtoms);

export let label = atoms({
  color: {
    light: 'gray-900',
    dark: 'white',
  },
  fontFamily: 'sans',
  fontSize: 'font-75',
});

export let requirementIndicator = atoms({
  color: { light: 'gray-600', dark: 'gray-300' },
});

import { atoms } from './text.css';
// import { createBox } from 'dessert-box';
import { createBox } from '../test';

/**
 * Text
 *
 * @description
 * Low level component to render text.
 *
 * @example
 * <Text>Hello</Text>
 */
export let Text = createBox(atoms, 'span');
Text.defaultProps = {
  color: {
    light: 'gray-900',
    dark: 'gray-100',
  },
  fontFamily: 'sans',
};

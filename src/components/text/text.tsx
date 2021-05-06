import { atoms } from './text.css';
import { createBox } from 'dessert-box';

/**
 * Text
 *
 * @description
 *
 * @example
 */
export let Text = createBox(atoms);
Text.defaultProps = {
  color: {
    light: 'gray-900',
    dark: 'gray-100',
  },
};

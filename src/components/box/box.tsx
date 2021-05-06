import { atoms } from './box.css';
import { createBox } from 'dessert-box';

/**
 * Box
 *
 * @description
 * Low level component to render a box model element.
 *
 * @example
 * <Box backgroundColor="pink-500"><Text>Hello</Text></Box>
 */
export let Box = createBox(atoms);

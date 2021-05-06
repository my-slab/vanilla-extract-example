import { atoms } from './flex.css';
import { createBox } from 'dessert-box';

/**
 * Flex
 *
 * @description
 * Low level component to render a flexbox container element.
 *
 * @example
 * <Flex direction="col" backgroundColor="pink-500">
 *  <Text>Hello</Text>
 *  </Flex>
 */
export let Flex = createBox(atoms);

Flex.defaultProps = {
  display: 'flex',
  direction: 'col',
};

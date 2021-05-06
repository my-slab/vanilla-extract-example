import { createGlobalTheme } from '@vanilla-extract/css';
import { createAtomicStyles } from '@vanilla-extract/sprinkles';

import { conditions } from '../helpers.css';
import { gridValues } from './tokens.css';

export const tokens = createGlobalTheme(':root', {
  ...gridValues,
});

export const gridAtoms = createAtomicStyles({
  conditions: {
    ...conditions.responsive,
  },
  defaultCondition: 'xsmall',
  properties: {
    columnGap: tokens.gridGapValues,
    gap: tokens.gridGapValues,
    gridColumn: tokens.gridColumnValues,
    gridRow: tokens.gridRowValues,
    gridTemplateColumns: tokens.gridTemplateColumnsValues,
    gridTemplateRows: tokens.gridTemplateRowsValues,
    rowGap: tokens.gridGapValues,
  },
});

import { dimensionValues } from '../helpers.css';

const gridTemplateColumnsValues = {
  none: 'none',
};

const gridColumnValues = {
  auto: 'auto',
  full: '1 / -1',
};

const gridTemplateRowsValues = {
  none: 'none',
};

const gridRowValues = {
  auto: 'auto',
  full: '1 / -1',
};

const gridGapValues = {
  ...dimensionValues,
};

export const gridValues = {
  gridColumnValues,
  gridGapValues,
  gridRowValues,
  gridTemplateColumnsValues,
  gridTemplateRowsValues,
};

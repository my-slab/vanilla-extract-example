import { dimensionValues } from '../helpers.css';

const gapValues = dimensionValues;

const flexDirectionValues = {
  row: 'row',
  'row-reverse': 'row-reverse',
  col: 'column',
  'col-reverse': 'column-reverse',
};

const flexGrowValues = {
  dont: '0',
  grow: '1',
};

const flexOrderValues = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  first: '-9999',
  last: '9999',
  none: '0',
};

const flexShrinkValues = {
  dont: '0',
  shrink: '1',
};

const _flexValues = {
  '1': '1 1 0%',
  auto: 'auto',
  initial: 'initial',
  none: 'none',
};

const flexWrapValues = {
  wrap: 'wrap',
  'wrap-reverse': 'wrap-reverse',
  nowrap: 'nowrap',
};

const placeContentValues = {
  center: 'center',
  start: 'start',
  end: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  stretch: 'stretch',
};

const placeItemsValues = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
};

const alignContentValues = {
  center: 'center',
  start: 'start',
  end: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
};

const alignItemsValues = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const justifyContentValues = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const flexValues = {
  alignContentValues,
  alignItemsValues,
  flexDirectionValues,
  flexGrowValues,
  flexOrderValues,
  flexShrinkValues,
  flexValues: _flexValues,
  flexWrapValues,
  gapValues,
  justifyContentValues,
  placeContentValues,
  placeItemsValues,
};

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

export const flexValues = {
  flexDirectionValues,
  flexGrowValues,
  flexOrderValues,
  flexShrinkValues,
  flexValues: _flexValues,
  flexWrapValues,
};

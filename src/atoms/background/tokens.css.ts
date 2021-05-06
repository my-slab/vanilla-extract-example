import { colorValues } from '../helpers.css';

const backgroundAttachmentValues = {
  fixed: 'fixed',
  local: 'local',
  scroll: 'scroll',
};

const backgroundClipValues = {
  border: 'border-box',
  padding: 'padding-box',
  content: 'context-box',
  text: 'text',
};

const backgroundSizeValues = {
  auto: 'auto',
  cover: 'cover',
  container: 'contain',
};

const backgroundColorValues = {
  ...colorValues,
};

const backgroundOpacityValues = {
  0: '0',
  5: '0.05',
  10: '0.10',
  15: '0.15',
  20: '0.20',
  25: '0.25',
  30: '0.30',
  35: '0.35',
  40: '0.40',
  45: '0.45',
  50: '0.50',
  55: '0.55',
  60: '0.60',
  65: '0.65',
  70: '0.70',
  75: '0.75',
  80: '0.80',
  85: '0.85',
  90: '0.90',
  95: '0.95',
  100: '1',
};

const backgroundPositionValues = {
  bottom: 'bottom',
  center: 'center',
  left: 'left',
  'left-bottom': 'left bottom',
  'left-top': 'left top',
  right: 'right',
  'right-bottom': 'right bottom',
  'right-top': 'right top',
  top: 'top',
};

const backgroundRepeatValues = {
  repeat: 'repeat',
  dont: 'no-repeat',
  x: 'repeat-x',
  y: 'repeat-y',
  round: 'round',
  space: 'space',
};

export const backgroundValues = {
  backgroundAttachmentValues,
  backgroundClipValues,
  backgroundColorValues,
  // backgroundOpacityValues,
  backgroundPositionValues,
  backgroundRepeatValues,
  backgroundSizeValues,
};

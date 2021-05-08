import { dimensionValues } from '../helpers.css';

let percentageValues = {
  '1/2': '50%',
  '1/3': '33.33333333333333%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666666666666664%',
  '2/6': '33.33333333333333%',
  '3/6': '50%',
  '4/6': '66.66666666666666%',
  '5/6': '83.33333333333334%',
  '1/12': '8.333333333333332%',
  '2/12': '16.666666666666664%',
  '3/12': '25%',
  '4/12': '33.33333333333333%',
  '5/12': '41.66666666666667%',
  '6/12': '50%',
  '7/12': '58.333333333333336%',
  '8/12': '66.66666666666666%',
  '9/12': '75%',
  '10/12': '83.33333333333334%',
  '11/12': '91.66666666666666%',
};

export const widthValues = {
  ...dimensionValues,
  ...percentageValues,
  auto: 'auto',
  full: '100%',
  max: 'max-content',
  min: 'min-content',
  screen: '100vw',
};

export const minWidthValues = {
  0: '0px',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
};

export const maxWidthValues = {
  min: 'min-content',
  max: 'max-content',
  prose: '65ch',
};

export const heightValues = {
  ...dimensionValues,
  ...percentageValues,
  0: '0px',
  auto: 'auto',
  full: '100%',
  screen: '100vh',
};

export const minHeightValues = {
  0: '0px',
  full: '100%',
  screen: '100vh',
};

export const maxHeightValues = {
  0: '0px',
  full: '100%',
  screen: '100vh',
};

export const sizingValues = {
  heightValues,
  maxHeightValues,
  maxWidthValues,
  minHeightValues,
  minWidthValues,
  widthValues,
};

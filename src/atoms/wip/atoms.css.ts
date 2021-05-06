import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';

// import { tokens, widthValues } from './tokens.css';

import { tokens } from './tokens/index.css';

export const spacingAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    marginBottom: tokens.dimensionValues,
    marginLeft: tokens.dimensionValues,
    marginRight: tokens.dimensionValues,
    marginTop: tokens.dimensionValues,
    paddingBottom: tokens.dimensionValues,
    paddingLeft: tokens.dimensionValues,
    paddingRight: tokens.dimensionValues,
    paddingTop: tokens.dimensionValues,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

export const sizingAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    width: { ...tokens.dimensionValues, ...widthValues },
    minWidth: tokens.dimensionValues,
    maxWidth: tokens.dimensionValues,
    height: tokens.dimensionValues,
    minHeight: tokens.dimensionValues,
    maxHeight: tokens.dimensionValues,
  },
});

export const positionAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    top: tokens.dimensionValues,
    bottom: tokens.dimensionValues,
    left: tokens.dimensionValues,
    right: tokens.dimensionValues,
    start: tokens.dimensionValues,
    end: tokens.dimensionValues,
    isHidden: [true, false],
  },
});

export const colorAtoms = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: tokens.colorValues,
  },
});

export const backgroundAtoms = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    backgroundColor: tokens.colorValues,
  },
});

export const borderColorAtoms = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    borderColor: tokens.colorValues,
    borderLeftColor: tokens.colorValues,
    borderRightColor: tokens.colorValues,
    borderTopColor: tokens.colorValues,
    borderBottomColor: tokens.colorValues,
  },
  shorthands: {
    borderColor: [
      'borderTopColor',
      'borderBottomColor',
      'borderRightColor',
      'borderLeftColor',
    ],
    borderXColor: ['borderLeftColor', 'borderRightColor'],
    borderYColor: ['borderTopColor', 'borderBottomColor'],
  },
});

export const borderAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    borderWidth: tokens.borderSizeValues,
    borderLeftWidth: tokens.dimensionValues,
    borderRightWidth: tokens.dimensionValues,
    borderTopWidth: tokens.dimensionValues,
    borderBottomWidth: tokens.dimensionValues,
    borderRadius: tokens.borderRadiusValues,
    borderTopLeftRadius: tokens.borderRadiusValues,
    borderTopRightRadius: tokens.borderRadiusValues,
    borderBottomLeftRadius: tokens.borderRadiusValues,
    borderBottomRightRadius: tokens.borderRadiusValues,
  },
  shorthands: {
    borderWidth: [
      'borderTopWidth',
      'borderBottomWidth',
      'borderRightWidth',
      'borderLeftWidth',
    ],
    borderXWidth: ['borderLeftWidth', 'borderRightWidth'],
    borderYWidth: ['borderTopWidth', 'borderBottomWidth'],
    borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  },
});

export const flexAtoms = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: [
      'block',
      'flex',
      'grid',
      'inline',
      'inline-block',
      'inline-flex',
      'none',
    ],
    flexDirection: ['column', 'column-reverse', 'row', 'row-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    justifyContent: [
      'start',
      'end',
      'center',
      'left',
      'right',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'safe center',
      'unsafe center',
    ],
    alignContent: [
      'start',
      'end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'safe center',
      'unsafe center',
    ],
    alignItems: [
      'start',
      'end',
      'center',
      'stretch',
      'self-start',
      'self-end',
      'baseline',
      'first baseline',
      'last baseline',
      'safe center',
      'unsafe center',
    ],
    gap: tokens.dimensionValues,
  },
  shorthands: {
    direction: ['flexDirection'],
    wrap: ['flexWrap'],
    placeItems: ['alignItems', 'justifyContent'],
  },
});

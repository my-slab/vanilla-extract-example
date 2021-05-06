// Forked from https://github.com/TheMightyPenguin/dessert-box
import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

interface AtomsFnBase {
  (...args: any): string;
  properties: Set<string>;
}

export function createBox<AtomsFn extends AtomsFnBase>(
  atomsFn: AtomsFn,
  as: keyof JSX.IntrinsicElements = 'div'
) {
  type BoxProps = {
    as?: keyof JSX.IntrinsicElements;
    children: any;
    className?: string;
  } & Parameters<AtomsFn>[0];

  function Box({ as: Element = as, className, children, ...props }: BoxProps) {
    let hasAtomProps = false;
    let atomProps: Record<string, unknown> = {};
    let otherProps: Record<string, unknown> = {};

    Object.entries(props).map(([name, value]) => {
      if (atomsFn.properties.has(name)) {
        hasAtomProps = true;
        atomProps[name] = value;
      } else {
        otherProps[name] = value;
      }
    });

    return (
      <Element
        {...otherProps}
        className={
          hasAtomProps || className
            ? `${className ?? ''}${hasAtomProps && className ? ' ' : ''}${
                hasAtomProps ? atomsFn(atomProps) : ''
              }`
            : undefined
        }
      >
        {children}
      </Element>
    );
  }

  return Box as Polymorphic.ForwardRefComponent<
    typeof as,
    Omit<BoxProps, 'as'>
  >;
}

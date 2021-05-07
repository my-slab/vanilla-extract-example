import { forwardRef } from 'react';

import * as styles from './field.css';
import { Children } from '../../shared/types';
import { Label } from '../label';
import { LabelProps } from '../label/label';

interface FieldProps
  extends Children,
    Pick<LabelProps, 'isRequired' | 'label'> {
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

/**
 * Field
 *
 * @example
 * <Field label="Full name" isRequired>
 *   <input type="text" />
 * </Field>
 */
export const Field = forwardRef(function Field(
  props: FieldProps,
  ref: React.Ref<HTMLDivElement>
) {
  let { children, isRequired, label, labelProps, ...otherProps } = props;

  return (
    <div {...otherProps} className={styles.field} ref={ref}>
      <Label isRequired={isRequired} label={label} {...labelProps} />
      {children}
    </div>
  );
});

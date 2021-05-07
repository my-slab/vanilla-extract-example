import { forwardRef } from 'react';
import * as styles from './label.css';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The content to display as the label. */
  label: React.ReactNode;
  /** Whether the label is labeling a required field or group.
   * @default false
   * */
  isRequired?: boolean;
}

/**
 * Label
 *
 * @description
 * Labels caption an item - usually an input field.
 *
 * @example
 * <Label label="Full name" isRequired />
 */
export let Label = forwardRef(function Label(
  props: LabelProps,
  ref: React.Ref<HTMLLabelElement>
) {
  let { label, isRequired, ...otherProps } = props;
  let requirement = isRequired ? (
    <span aria-hidden="true" className={styles.requirementIndicator}>
      {' '}
      (required)
    </span>
  ) : (
    <span className={styles.requirementIndicator}> (optional)</span>
  );

  return (
    <label {...otherProps} className={styles.label} ref={ref}>
      {label}
      {requirement && requirement}
    </label>
  );
});

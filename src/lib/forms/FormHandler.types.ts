import type { FieldPath } from './FieldPath.types';

// Update FormHandler to support nested paths
export interface FormHandler<T> {
  values: T;
  errors: Record<string, string | undefined> | Partial<Record<FieldPath<T>, string>>;
  touched: Partial<Record<FieldPath<T>, boolean>>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: FieldPath<T>, value: any) => void;
  setFieldError: (field: FieldPath<T>, error: string | undefined) => void;
  setFieldTouched: (field: FieldPath<T>, touched: boolean) => void;
}

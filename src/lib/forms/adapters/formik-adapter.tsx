// formikAdapter.ts
import { useFormik, type FormikValues } from 'formik';
import type { FieldPath } from '../FieldPath.types';
import type { FormHandler } from '../FormHandler.types';

export function useFormikAdapter<T extends FormikValues>(
  initialValues: T,
  validationSchema: any,
  onSubmit: (values: T) => void
) {
  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    setFieldValue: formik.setFieldValue as (field: FieldPath<T>, value: any) => void,
    setFieldError: formik.setFieldError as (field: FieldPath<T>, error: string | undefined) => void,
    setFieldTouched: formik.setFieldTouched as (field: FieldPath<T>, touched: boolean) => void,
  } as FormHandler<T>;
}

// FormProvider.js
import debounce from 'lodash/debounce';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { useFormikAdapter } from './adapters/formik-adapter';
import type { FormHandler } from './FormHandler.types';

// Extend FormContextType to include the debounced function
type FormContextType<T> = FormHandler<T> & {
  debouncedSetFieldValue: (field: string, value: any) => void;
};

// Create the context
const FormContext = createContext<FormContextType<any> | undefined>(undefined);

// Hook to access the form context
export const useFormContext = <T,>() => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context as FormContextType<T>;
};

// FormProvider component with ref forwarding
export const FormProvider = forwardRef<
  FormHandler<any>,
  {
    children: React.ReactNode;
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: any) => void;
    debounceDelay?: number;
  }
>(({ children, initialValues, validationSchema, onSubmit, debounceDelay = 300 }, ref) => {
  // Get the raw form adapter (e.g., from Formik)
  const adapter = useFormikAdapter(initialValues, validationSchema, onSubmit);

  // Create a debounced version of setFieldValue
  const debouncedSetFieldValue = useMemo(
    () =>
      debounce((field: string, value: any) => adapter.setFieldValue(field, value), debounceDelay),
    [adapter.setFieldValue, debounceDelay]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSetFieldValue.cancel();
    };
  }, [debouncedSetFieldValue]);

  // Combine adapter with debounced function for context
  const formContextValue: FormContextType<any> = {
    ...adapter,
    debouncedSetFieldValue,
  };

  // Expose methods via ref for external access
  useImperativeHandle(ref, () => adapter);

  return (
    <FormContext.Provider value={formContextValue}>
      <form onSubmit={adapter.handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
});

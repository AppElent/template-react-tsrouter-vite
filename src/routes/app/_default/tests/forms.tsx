import { TextField } from '@/lib/forms/components/textfield';
import type { FormHandler } from '@/lib/forms/FormHandler.types';
import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import { FormProvider } from 'react-hook-form';

export const Route = createFileRoute('/app/_default/tests/forms')({
  component: RouteComponent,
});

function RouteComponent() {
  const formRef = useRef<FormHandler<any> | null>(null);

  const handleExternalChange = () => {
    formRef.current?.setFieldValue('username', 'instantUpdate'); // Undebounced
  };

  return (
    <div>
      <FormProvider
        ref={formRef}
        initialValues={{ username: '' }}
        validationSchema={null}
        onSubmit={(values: any) => console.log(values)}
        debounceDelay={500} // Global debounce delay
      >
        <TextField
          name="username"
          debounce={true}
        />{' '}
        {/* Uses debouncedSetFieldValue */}
        <TextField
          name="email"
          debounce={false}
        />{' '}
        {/* Uses setFieldValue */}
        <button type="submit">Submit</button>
      </FormProvider>
      <button onClick={handleExternalChange}>Update Externally</button>
    </div>
  );
}

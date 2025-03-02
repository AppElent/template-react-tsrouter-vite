// TextField.tsx
import { useFormContext } from '../form-provider';

export function TextField<T>({
  name,
  debounce = true,
  ...props
}: {
  name: string;
  debounce?: boolean;
}) {
  const { values, setFieldValue, debouncedSetFieldValue, errors, touched, handleBlur } =
    useFormContext<T>();
  const setter = debounce ? debouncedSetFieldValue : setFieldValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(name, e.target.value);
  };

  return (
    <div className="space-y-1">
      <input
        type="text"
        name={name as string}
        value={values[name] || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        {...props}
      />
      {touched[name] && errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]}</span>
      )}
    </div>
  );
}

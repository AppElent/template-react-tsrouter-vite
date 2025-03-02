// Utility to generate dot-separated paths for nested objects
// export type FieldPath<T> = T extends object
//   ? {
//       [K in keyof T]: T[K] extends object ? `${string & K}.${FieldPath<T[K]>}` : `${string & K}`;
//     }[keyof T]
//   : never;

// Utility to generate field paths, including arrays
export type FieldPath<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends Array<infer U>
        ? // If it's an array, include indexed paths
          `${string & K}[${number}]` | `${string & K}[${number}].${FieldPath<U>}`
        : T[K] extends object
          ? // If it's an object, recurse
            `${string & K}` | `${string & K}.${FieldPath<T[K]>}`
          : `${string & K}`; // Base case: simple field
    }[keyof T]
  : never;

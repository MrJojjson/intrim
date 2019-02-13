export const getErrorValidation = (store, id) => (
  (store.errors && store.errors[id]) || false
);

export const getInputValue = (store, id) => (
  (store.inputs && store.inputs[id]) || ''
);

export const getErrorValidation = (store, page, id) => (
  (store.errors && store.errors[page] && store.errors[page][id]) || false
);

export const getInputValue = (store, page, id) => (
  (store.inputs && store.inputs[page] && store.inputs[page][id]) || ''
);

export const getInputValues = (store, page, ids) => (
  (ids && ids.map(id => (store.inputs && store.inputs[page] && store.inputs[page][id]))) || []
);

export const getArray = (store, page, name) => (store.inputs && store.inputs[page] && store.inputs[page][name]) || [];

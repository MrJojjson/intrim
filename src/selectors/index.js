export const getErrorValidation = (store, page, id) => (
  (store.errors && store.errors[page] && store.errors[page][id]) || false
);

export const getCheckIfInArrayValidation = (store, page, id, value) => (
  (
    store.inputs
    && store.inputs[page]
    && store.inputs[page][id]
    && store.inputs[page][id].filter(item => item.value === value).length !== 0 && 'Already added'
  ) || false
);

export const getInputValue = (store, page, id) => (
  (store.inputs && store.inputs[page] && store.inputs[page][id]) || ''
);

export const getInputValues = (store, page, ids) => (
  (ids && ids.map(id => (store.inputs && store.inputs[page] && store.inputs[page][id]))) || []
);

export const getPasswordStrength = (store, page, id) => (
  (store.inputs && store.inputs[page] && store.inputs[page][id]) || ''
);

export const getArray = (store, page, name) => (store.inputs && store.inputs[page] && store.inputs[page][name]) || [];

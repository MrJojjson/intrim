export const addValidationError = (id, value) => (dispatch) => {
  dispatch({
    type: 'ADD_VALIDATION_ERROR',
    id,
    value,
  });
};

export const removeValidationError = id => (dispatch) => {
  dispatch({
    type: 'REMOVE_VALIDATION_ERROR',
    id,
  });
};

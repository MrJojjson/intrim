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

export const onChangeInput = (id, value) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_INPUT',
    id,
    value,
  });
};

export const registrationStep = step => (dispatch) => {
  dispatch({
    type: 'REGISTRATION_STEP',
    step,
  });
};

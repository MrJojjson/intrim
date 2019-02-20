export const addValidationError = (page, id, value) => (dispatch) => {
  dispatch({
    type: 'ADD_VALIDATION_ERROR',
    page,
    id,
    value,
  });
};

export const removeValidationError = (page, id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_VALIDATION_ERROR',
    page,
    id,
  });
};

export const onChangeInput = (page, id, value) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_INPUT',
    page,
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

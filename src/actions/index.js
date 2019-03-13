
/* VALIDATION */
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

/* ON CHANGE */
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

/* ON ADD */
export const onAddToArray = (page, name, object) => (dispatch) => {
  dispatch({
    type: 'ON_ADD_TO_ARRAY',
    page,
    name,
    object,
  });
};

export const onAddPasswordStrength = (page, name, value) => (dispatch) => {
  dispatch({
    type: 'ON_ADD_PASSWORD_STRENGTH',
    page,
    name,
    value,
  });
};

/* ON REMOVE */
export const onRemoveFromArray = (page, name, id) => (dispatch) => {
  dispatch({
    type: 'ON_REMVOE_FROM_ARRAY',
    page,
    name,
    id,
  });
};

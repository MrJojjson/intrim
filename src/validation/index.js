import React from 'react';

import { getUser, newUser, loginUser } from '../apiservices';
import { validateUser } from '../apiservices/validation';

import { addValidationError, removeValidationError } from '../actions';

const validateEmail = (email) => {
  const re = (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return re.test(String(email).toLowerCase());
};

export const validateOnServer = (id, value) => {
  if (id && id.toLowerCase() === 'email' && !validateEmail(value)) {
    return;
  }
  validateUser(id, value);
};

export const validateOnClient = (dispatch, id, value) => {
  if (!id) {
    return { success: false, data: 'Id must be set' };
  }
  if (value === undefined || value === null) {
    return dispatch(addValidationError(id, 'Value must be set'));
  }

  const idToLowerCase = id.toLowerCase();
  if (idToLowerCase === 'firstname' || idToLowerCase === 'surname') {
    if (value.length > 1) {
      return dispatch(removeValidationError(id));
    }
    return dispatch(addValidationError(id, 'One or more characters'));
  }
  return false;
};

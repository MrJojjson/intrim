import React from 'react';

import { getUser, newUser, loginUser } from '../apiservices';
import { validateUser, validateOrganisation } from '../apiservices/validation';

import { addValidationError, removeValidationError } from '../actions';

const validateEmail = (email) => {
  const re = (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return re.test(String(email).toLowerCase());
};

export const validateOnServer = (dispatch, page, id, value, type) => {
  if (id && id.toLowerCase() === 'email' && !validateEmail(value)) {
    return dispatch(addValidationError(page, id, 'Wrong format on email'));
  }
  if (type === 'user') {
    return validateUser(dispatch, page, id, value);
  }
  if (type === 'organisation') {
    return validateOrganisation(dispatch, page, id, value);
  }
  return null;
};

export const validateOnClient = (dispatch, page, id, value, type) => {
  if (!id) {
    return { success: false, data: 'Id must be set' };
  }
  if (value === undefined || value === null) {
    return dispatch(addValidationError(page, id, 'Value must be set'));
  }

  const idToLowerCase = id.toLowerCase();
  if (idToLowerCase === 'firstname' || idToLowerCase === 'surname') {
    if (value.length > 1) {
      return dispatch(removeValidationError(page, id));
    }
    return dispatch(addValidationError(page, id, 'One or more characters'));
  }
  return false;
};

export const validateButton = (store, page, validationArray) => {
  const { errors, inputs } = store;
  const validationItemsInInputs = validationArray && validationArray.filter(validationKey => (inputs && inputs[page] && inputs[page][validationKey]));
  const validationItemsInErrors = validationArray && validationArray.filter(validationKey => (errors && errors[page] && errors[page][validationKey]));

  const isValid = validationItemsInInputs.length === validationArray.length && validationItemsInErrors.length <= 0;
  return isValid;
};

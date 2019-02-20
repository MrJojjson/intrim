import axios from 'axios';

import { removeValidationError, addValidationError } from '../actions';

const baseURL = 'http://127.0.0.1:8081/api';

export const validateUser = (dispatch, page, id, value) => {
  const URL = `${baseURL}/validateUser`;
  axios.post(URL, {
    id,
    value,
  })
    .then((response) => {
      console.log('Validation response from server => ', response);
      const { success, data } = response.data;
      if (success) {
        return dispatch(removeValidationError(page, id));
      }
      return dispatch(addValidationError(page, id, data));
    })
    .catch((error) => {
      console.log('Validation error from server => ', error);
      console.log(error);
    });
};

export const validateOrganisation = (dispatch, page, id, value) => {
  const URL = `${baseURL}/validateOrganisation`;
  axios.post(URL, {
    id,
    value,
  })
    .then((response) => {
      console.log('Validation response from server => ', response);
      const { success, data } = response.data;
      if (success) {
        return dispatch(removeValidationError(page, id));
      }
      return dispatch(addValidationError(page, id, data));
    })
    .catch((error) => {
      console.log('Validation error from server => ', error);
      console.log(error);
    });
};

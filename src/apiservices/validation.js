import axios from 'axios';

import { removeValidationError, addValidationError } from '../actions';

const baseURL = 'http://127.0.0.1:8081/api';

export const validateUser = (dispatch, id, value) => {
  const URL = `${baseURL}/validateUser`;
  axios.post(URL, {
    id,
    value,
  })
    .then((response) => {
      console.log('Validation response from server => ', response);
      const { success, data } = response.data;
      if (success) {
        return dispatch(removeValidationError(id));
      }
      return dispatch(addValidationError(id, data));
    })
    .catch((error) => {
      console.log('Validation error from server => ', error);
      console.log(error);
    });
};

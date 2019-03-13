import axios from 'axios';

import { removeValidationError, addValidationError } from '../actions';

const baseURL = 'http://127.0.0.1:8081/api';

export const registrateOrganisation = (data) => {
  const URL = `${baseURL}/organisation/newOrganisation`;
  const { email, name, password } = data;
  axios.post(URL, {
    email,
    name,
    password,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

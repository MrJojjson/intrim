import axios from 'axios';

const baseURL = 'http://127.0.0.1:8081/api';

export const validateUser = (id, value) => {
  const URL = `${baseURL}/validateUser`;
  axios.post(URL, {
    id,
    value,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

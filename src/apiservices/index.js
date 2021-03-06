import axios from 'axios';

const baseURL = 'http://127.0.0.1:8081/api';

export const getUser = () => {
  const URL = `${baseURL}/user/getUser`;
  const email = 'johansjoberg88@gmail.com';
  axios.post(URL, {
    email,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const newUser = (message) => {
  const URL = `${baseURL}/user/newUser`;
  const firstName = 'Johan';
  const lastName = 'Sjöberg';
  const email = 'johansjoberg88@gmail.com';
  const organisation = 'sea & mountains';
  const password = 'test123';

  axios.post(URL, {
    firstName,
    lastName,
    email,
    organisation,
    password,
  },
  {
    headers: {
      Authorization: 'Bear',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const loginUser = (message) => {
  const URL = `${baseURL}/user/login`;
  const email = 'johansjoberg88@gmail.com';
  const password = 'test123';

  axios.post(URL, {
    email,
    password,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

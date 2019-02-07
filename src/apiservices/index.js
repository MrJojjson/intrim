import axios from 'axios';

const baseURL = 'http://127.0.0.1:8081/api';
const usersUrl = 'users';

export const getInitData = () => {
  const URL = `${baseURL}/getData`;
  // fetch(URL)
  //   .then(data => data.json())
  //   .then(res => console.log('res', res));
  axios.get(URL)
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const newUser = (message) => {
  const URL = `${baseURL}/newUser`;
  const firstName = 'Johan';
  const lastName = 'Sjöberg';
  const email = 'johansjoberg88@gmail.com';
  const organisation = 'sea & mountains';
  const password = 'test123';
  const id = 1;

  axios.post(URL, {
    id,
    firstName,
    lastName,
    email,
    organisation,
    password,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

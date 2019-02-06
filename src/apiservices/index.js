import axios from 'axios';

const baseURL = 'http://127.0.0.1:8081/api/';
const usersUrl = 'users';

export const getInitData = () => {
  const URL = `${baseURL}getData`;
  fetch(URL)
    .then(data => data.json())
    .then(res => console.log('res', res));
};

export const putData = (message) => {
  const URL = `${baseURL}putData`;
  const idToBeAdded = 0;
  axios.post(URL, {
    id: idToBeAdded,
    message: 'first message',
  });
};

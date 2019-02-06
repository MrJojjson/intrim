const baseURL = 'http://127.0.0.1:5984/intrim-';
const usersUrl = 'users';

// const fetchPost = url => fetch(url, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     user,
//     data
//   }),
// });

const fetchGet = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getInitData = () => {
  const URL = baseURL + usersUrl;
  console.log('url', URL);
  return fetchGet(URL)
    .then((response) => {
      console.log('init response => ', response);
      // const { status, _bodyInit } = response;
      // var text = _bodyInit;
      // try {
      //   text = JSON.parse(_bodyInit);
      // }
      // catch(e) {
      //   console.log('invalid json');
      // }
      // return { response, status, text };
    })
    .catch((error) => {
      console.log('error', error);
      // return error;
    });
};

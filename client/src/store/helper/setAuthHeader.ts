import axios from 'axios';

const setAuthHeader = (header: string | undefined) => {
  axios.defaults.headers.Authorization = 'Bearer ' + header;
};

export { setAuthHeader };

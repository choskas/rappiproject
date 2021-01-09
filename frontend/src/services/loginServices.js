import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const LOGIN_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  
};

export default LOGIN_SERVICE;
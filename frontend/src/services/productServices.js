import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const PRODUCT_SERVICE = {
  createTeam: async (data) => {
    return await SERVICE.post('/createteam', data)
  },
  editTeam: async (data, id)=>{
    return await SERVICE.put(`/editteam/${id}`, data)
  },
  getProduct: async (id) => {
      return await SERVICE.get(`/detail-product/${id}`)
  },
  
};

export default PRODUCT_SERVICE;
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:'https://hope4child-api.onrender.com',
  // baseURL:'http://localhost:3001',
})
export default axiosInstance


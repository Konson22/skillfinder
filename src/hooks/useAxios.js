import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL:process.env.REACT_APP_PROD_URL,
  baseURL:process.env.REACT_APP_LOCAL_URL,
  withCredentials: true 
})
export default axiosInstance


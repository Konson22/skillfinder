import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../hooks/useAxios'

const contextApi = createContext()

export default function GlobalContextProvider({ children }) {

  const [openForm, setOpenForm] = useState(null)
  const [profile, setProfile] = useState(null)

  const token = localStorage.getItem('ACCESS_TOKEN');
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const results = await axiosInstance.post('/users/auth').then(res => res)
        if(results.status === 200){
          setProfile(results.data)
        }
      } catch (error) {
        console.log(error.response?.data)
      }
    }
    
    verifyAuth()
  }, [token])

  return (
    <contextApi.Provider value={{ openForm, setOpenForm, profile, setProfile }}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalApi = () => useContext(contextApi)


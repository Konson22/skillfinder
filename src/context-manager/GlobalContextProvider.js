import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../hooks/useAxios'

const contextApi = createContext()

export default function GlobalContextProvider({ children }) {

  const [openForm, setOpenForm] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const results = await axiosInstance.post('/auth').then(async res => res)
        if(results.status === 200){
          const isFound = await checkResume(results.data.id)
          console.log(isFound)
          setProfile({...results.data, isFound})
          // if(isFound){
          // }else{
          //   setProfile(results.data)
          // }
        }
      } catch (error) {
        if(error.response){
          console.log(error.response?.data)
        }else{
          console.log(error.message)
        }
      }
    }
    
    verifyAuth()
  }, [])
  
  const checkResume = async (id) => {
    try {
      return await axiosInstance(`/resume/single?resume_id=${id}`).then(res => res.data.isFound)
    } catch (error) {
      if(error.response){
        return error.response?.data.isFound
      }else{
        console.log(error.message)
      }
    }
  }


  return (
    <contextApi.Provider value={{ openForm, setOpenForm, profile, setProfile }}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalApi = () => useContext(contextApi)


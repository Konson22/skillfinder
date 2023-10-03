import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../hooks/useAxios';

const contextApi = createContext()

export default function ResumeContextProvider({ children }) {

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [resume, setResume] = useState([])

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchResumies(){
      try{
        const results = await axiosInstance('/resume').then(res => res)
        if(isMuted){
          results.data.length >=1 ? setResume(results.data) : setMessage('No data')
        }
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setMessage(error?.response?.data)
        }
        setMessage('Error Occures!')
      }finally{
        setIsLoading(false)
      }
    }
    fetchResumies()

    return () => {
      controller.abort()
      isMuted = false
    }
  }, []);

  return (
    <contextApi.Provider value={{ resume, message, setResume, isLoading }}>
      {children}
    </contextApi.Provider>
  )
}

export const useResume = () => useContext(contextApi)

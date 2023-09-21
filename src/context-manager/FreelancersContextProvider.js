import { useState, useContext, createContext, useEffect } from 'react'
import { expertsData } from '../assets/expertsData'

const contextApi = createContext()

export default function FreelancersContextProvider({ children }) {

  const [freelancers, setFreelancers] = useState([])

  useEffect(() => {
    setFreelancers(expertsData)
  }, []);

  return (
    <contextApi.Provider value={{ freelancers, setFreelancers }}>
      {children}
    </contextApi.Provider>
  )
}

export const useFreelancers = () => useContext(contextApi)

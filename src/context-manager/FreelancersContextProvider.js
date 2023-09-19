import { useState, useContext, createContext, useEffect } from 'react'
import freelancersJson from '../assets/users.json'


const contextApi = createContext()

export default function FreelancersContextProvider({ children }) {

  const [freelancers, setFreelancers] = useState([])

  useEffect(() => {
    setFreelancers(freelancersJson)
  }, []);

  return (
    <contextApi.Provider value={{ freelancers, setFreelancers }}>
      {children}
    </contextApi.Provider>
  )
}

export const useFreelancers = () => useContext(contextApi)

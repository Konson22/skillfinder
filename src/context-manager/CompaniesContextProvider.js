import { useState, useContext, createContext, useEffect } from 'react'

const contextApi = createContext()

export default function CompaniesContextProvider({ children }) {

  const [companies, setCompanies] = useState([])

  useEffect(() => {
    setCompanies(companiesData)
  }, []);

  return (
    <contextApi.Provider value={{ companies, setCompanies }}>
      {children}
    </contextApi.Provider>
  )
}

export const useCompanies = () => useContext(contextApi)

const companiesData =  [
  {
    _id:'44',
    name:'Sudo Agency',
    category:'Software Engineer',
    logo:process.env.PUBLIC_URL+'/images/Image.png',
    about:'service you need, or browse through categories to discover local professionals.',
    rated:5
  },
  {
    _id:'44',
    name:'Sudo Agency',
    category:'Software Engineer',
    logo:process.env.PUBLIC_URL+'/images/Image.png',
    about:'service you need, or browse through categories to discover local professionals.',
    rated:5
  },
  {
    _id:'44',
    name:'Sudo Agency',
    category:'Software Engineer',
    logo:process.env.PUBLIC_URL+'/images/Image.png',
    about:'service you need, or browse through categories to discover local professionals.',
    rated:5
  },
]
import { FaAt, FaUnlockAlt, FaUser } from "react-icons/fa";
import axiosInstance from "../../hooks/useAxios";
import { useGlobalApi } from "../../context-manager/GlobalContextProvider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate()
  const { setProfile } = useGlobalApi()
  const [inputs, setInputs] = useState({ name:'', email:'' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = e => {
    setInputs(prev => {
      return {...prev, [e.name]:e.value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    try {
      const results = await axiosInstance.post('/auth/login', inputs).then(res => res)
      if(results.status === 200){
        setProfile(results.data.user)
        localStorage.setItem('ACCESS_TOKEN', results.data.ACCESS_TOKEN)
        return navigate('/')
      }
    } catch (error) {
      if(error?.response?.data){
        setMessage(error?.response?.data)
      }else{
        setMessage('Opps Something went wrong!')
      }
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-lightblue flex items-center justify-center py-[6rem] text-white">
      <div className="bg-whitee bg-lightblue2 md:w-[27%] w-[90%] rounded shadow-md shadow-black/40 md:px-8 px-5 pb-12">
        <div className="text-center mt-[-2.5rem]">
          <div className="h-[5rem] w-[5rem] flex items-center justify-center rounded-2xl rotate-[45deg] bg-lightgreen text-white border-8 border-lightblue mx-auto my-0">
            <FaUser className="text-4xl rotate-[-45deg]" />
          </div>
          <span className="text-2xl block mt-3">Login</span>
          {message && <span className="text-sm text-white block mt-2 bg-red-300 p-1">{message}</span>}
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="h-[3rem] flex mb-6">
            <span className="flex items-center justify-center bg-lightblue/60 text-white px-4">
              <FaAt />
            </span>
            <input type="email" name="email" placeholder="Enter E-mail" className="h-full bg-lightblue border-none outline-none px-4 w-full" onChange={e => handleInput(e.target)} />
          </div>
          <div className="h-[3rem] flex mb-6">
            <span className="flex items-center justify-center bg-lightblue/60 text-white px-4">
              <FaUnlockAlt />
            </span>
            <input type="password" name="password" placeholder="*********" className="h-full bg-lightblue border-none outline-none px-4 w-full" onChange={e => handleInput(e.target)} />
          </div>
          <button className="w-full py-2 bg-lightgreen text-white rounded">
            {isLoading ? 'Loading...':'Sign in'}
          </button>
        </form>
        <div className="text-center mt-5">
          <span>Don't have Account <Link className="text-blue-800" to='/signup'>Sign up</Link></span>
        </div>
      </div>
    </div>
  )
}



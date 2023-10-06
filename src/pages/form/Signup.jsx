import { useState } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import axiosInstance from "../../hooks/useAxios"
import { Link, useNavigate } from "react-router-dom"


export default function Signup() {

  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:'',
    comfirm_password:'',
  })

  const handleInput = e => {
    setInputs(prev => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const results = await axiosInstance.post('/auth/register', inputs).then(res => res)
      if(results.status === 200){
        console.log(results.data)
        return navigate('/login')
      }
    } catch (error) {
      if(error?.response?.data){
        setMessage(error?.response?.data)
      }else{
        setMessage('Opps Something went wrong!')
      }
    }
  }


  return (
    <div className="bg-lightblue/80 flex items-center justify-center py-[6rem]">
      <div className="bg-white  md:w-[35%] w-[95%] rounded-md shadow-md shadow-black/40 md:p-8 p-5">
        <div className="text-center text-2xl mb-5">Sign up with</div>
        <div className="flex">
          <button className="flex items-center justify-center rounded bg-red-700 flex-1 text-white md:py-2 py-3 mr-1">
            <FaGoogle className="md:text-base text-xl mr-2" /> <span className="md:block ">Gmail</span>
          </button>
          <button className="flex items-center justify-center rounded bg-blue-600 flex-1 text-white md:py-2 py-3 ml-1">
            <FaFacebook className="md:text-base text-xl mr-2" /> <span className="md:block ">Facebook</span>
          </button>
        </div>
        <div className="flex items-center justify-center h-[2px] bg-lightblue my-14">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white border-2 border-lightblue">OR</div>
        </div>
        <div className="text-center mb-5">
          <span className="text-2xl">Or Create Account</span>
        </div>
        {message && <span className="text-red-500 block mb-4">{message}</span>}
        <form onSubmit={handleSubmit}>
          {data.map(field => (
            <div className="h-[3rem] mb-5">
              <input 
                {...field} 
                required
                value={inputs[field.name]} 
                className="h-full bg-gray-100 border-none outline-none px-4 w-full" 
                onChange={e => handleInput(e)} 
              />
            </div>
          ))}
          <button className="w-full py-2 bg-lightgreen text-gray-100 rounded">Sign up</button>
        </form>
        <div className="text-center mt-5">
          <span>Already have an Account <Link className="text-blue-800" to='/login'>Login</Link></span>
        </div>
      </div>
    </div>
  )
}

const data = [
  {name:'name', type:'text', placeholder:'Name'},
  {name:'email', type:'email', placeholder:'Email Address'},
  {name:'password', type:'password', placeholder:'Create Password'},
  {name:'comfirm_password', type:'password', placeholder:'Comfirm Password'},
]

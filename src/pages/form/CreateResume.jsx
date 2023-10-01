import { useState } from "react"
import InputField from "./InputField"
import axiosInstance from "../../hooks/useAxios"
import { useGlobalApi } from "../../context-manager/GlobalContextProvider"


export default function CreateResume() {

  const { profile } = useGlobalApi()
  const [message, setMessage] = useState('')
  const [fieldsData, setFieldsData] = useState({
    name:'',
    profession:'',
    state:'',
    bio:'',
    insitute:'',
    college:'',
    start_year:'',
    end_year:'',
  })

  const handleInput = (e) => {
    setFieldsData({...fieldsData, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!profile) return
    try {
      const results = await axiosInstance.post('/users/upload-resume', {...fieldsData, profile_image:profile.profile_image ? profile.profile_image : null}).then(res => res)
      if(results.status === 200){
        console.log(results.data)
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
    <div className="md:mx-[20%] bg-gray-100 mmd:flex p-[8%]">
      <div className="flex-1">
        <h2 className="text-3xl mb-5">Create Resume</h2>
        {message && <span className="text-red-500">{message}</span>}
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <h3 className="text-2xl mb-3">Personal Info</h3>
            {formFields.personal.map(input => (
              <InputField fields={input} handleInput={handleInput} />
            ))}
          </div>
          <div className="mb-7">
            <h3 className="text-2xl mb-3">Education</h3>
            {formFields.education.map(input => (
              <InputField fields={input} handleInput={handleInput} />
            ))}
          </div>
          <button type="submit" className="w-full bg-green-500 text-white rounded py-2">Submit</button>
        </form>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}



const formFields = {
  personal:[
    {name:'name', type:'text', placeholder:'Full Name', label:'First Name'},
    {name:'profession', type:'text', placeholder:'Profession/Title', label:'Profession'},
    {name:'state', type:'text', placeholder:'State/City', label:'State/City'},
    {name:'address', type:'text', placeholder:'Address', label:'Address'},
    {name:'bio', type:'textarea', placeholder:'Tell about your skills', label:'About'},
  ],
  education:[
    {name:'insitute', type:'text', placeholder:'University/Insitute Name', label:'University/Insitute'},
    {name:'college', type:'text', placeholder:'What College', label:'College/focalt'},
    {name:'start_year', type:'date', placeholder:'Year', label:'Graduation Year'},
    {name:'end_year', type:'date', placeholder:'Year', label:'end Year'},
  ]
}
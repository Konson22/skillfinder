import { useState } from "react"
import InputField from "./InputField"
import axiosInstance from "../../hooks/useAxios"
import { useGlobalApi } from "../../context-manager/GlobalContextProvider"
import { useResume } from "../../context-manager/ResumeContextProvider"


export default function CreateResume() {

  const { profile, setProfile } = useGlobalApi()
  const { setResume } = useResume()
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
    const modifiedData = {
      ...fieldsData,
      email:profile.email,
      profile_image:profile.profile_image,
      user_id:profile.id
    }
    setIsLoading(true)
    try {
      const results = await axiosInstance.post('/resume/upload', modifiedData).then(res => res)
      setResume(prev => [...prev, results.data])
      setProfile({...profile, isFound:true})
      console.log(results.data)
    } catch (error) {
      if(error?.response){
        setMessage(error?.response?.data)
      }else{
        setMessage(error.message)
      }
    }finally{
      setIsLoading(false)
    }
  }
 
  return (
    <div className="md:mx-[20%] bg-gray-100 mmd:flex p-[8%]">
      <div className="flex-1">
        <h2 className="text-3xl mb-5">Create Resume</h2>
        {message && <span className="bg-red-500/50 text-white p-2 text-center mb-4 block">{message}</span>}
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
          <div className="mb-7">
            <h3 className="text-2xl mb-3">Contacts</h3>
            {formFields.contacts.map(input => (
              <InputField fields={input} handleInput={handleInput} />
            ))}
          </div>
          <button type="submit" className="w-full bg-green-500 text-white rounded py-2">
            {isLoading ? 'Loading...':'Submit'}
          </button>
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
  ],
  contacts:[
    {name:'phone', type:'text', placeholder:'+2119********', label:'Phone'},
    {name:'whats_app', type:'text', placeholder:'+2119********', label:'WhatsApp No'},
    {name:'linked_in', type:'text', placeholder:'link in url', label:'Linked in'},
  ],
}
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { categories } from "../../assets/categories";
import UserCard from "../../components/UserCard";
import { useFreelancers } from "../../context-manager/FreelancersContextProvider";
import { useEffect, useState } from "react";
import { states } from "../../assets/data";
import { useSearchParams, useNavigate } from "react-router-dom";


export default function ExpertPage() {

  const { freelancers } = useFreelancers()
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  

  useEffect(() => {
    freelancers.length > 0 && setUsers(freelancers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  function handleStateSelect(data){
    return () => {
      const state = searchParams.get('state');
      navigate(`?state=${data}`)
      if(state === 'All States'){
        return setUsers(freelancers)
      }
      const results = state && freelancers.filter(d => d.state.toLowerCase() === state.toLowerCase())
      results.length > 0 && setUsers(results)
    }
  }
  
  function handleCategorySelect(data){
    return () => {
      // console.log(data)
    }
  }

  function handleKeyWordSearch(data){
    return () => {
      // console.log(data)
    }
  }

  return (
    <div className='md:px-[3%] px-3 bg-gray-100'>
      <div className="md:flex items-center justify-between mt-">
        <h3 className="md:text-4xl text-xl">Search</h3>
        <div className="md:flex md:mt-4 mt-2">
          <div className="flex md:mb-0 mb-4">
            <StateDropDown actionHandler={handleStateSelect} />
            <CategoryDropDown actionHandler={handleCategorySelect} />
          </div>
          <SearchBar actionHandler={handleKeyWordSearch} />
        </div>
      </div>
      <div className="md:py-8 p-3">
        <h3 className="text-4xl font-bold">Freelancers</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
          {freelancers.length > 0 ? freelancers.map(user => <UserCard user={user} />) : 'No data'}
        </div>
      </div>
    </div>
  )
}




function SearchBar({ actionHandler }){
  return(
    <div className="flex flex-1 bg-red-200 h-[3rem]">
      <input className="h-full md:flex-1 w-full bg-white border-none outline-none px-4" type="text" placeholder="Key word" />
      <button className="flex items-center h-full px-5 bg-lightgreen text-white">
        <FiSearch /> <span className="md:block hidden ml-1">Find</span>
      </button>
    </div>
  )
}

function CategoryDropDown({ actionHandler }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="
        h-[3rem] flex items-center justify-center relative md:w-auto w-full bg-white md:px-3 md:mx-2
      "
      onClick={() => setIsOpen(!isOpen)}
    >
      All Categories
      <FiChevronDown />
      {isOpen && 
        <div className="absolute top-full left-0 w-[200px] bg-gray-50 shadow border py-2">
          {categories.map(categor => (
            <span className="px-4 py-2 block" key={categor.title} onClick={actionHandler(categor)}>{categor.title}</span>
          ))}
        </div>
      }
    </div>
  )
}


function StateDropDown({ actionHandler }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="
        h-[3rem] flex items-center justify-center relative md:w-auto w-full bg-white md:px-3
      "
      onClick={() => setIsOpen(!isOpen)}
    >
      All States
      <FiChevronDown />
      {isOpen && 
        <div className="absolute top-full left-0 w-[200px] bg-gray-50 shadow border py-2">
          {states.map(state => (
            <span className="px-4 py-2 block" key={state} onClick={actionHandler(state)}>{state}</span>
          ))}
        </div>
      }
    </div>
  )
}

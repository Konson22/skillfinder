import { FiChevronDown, FiSearch } from "react-icons/fi";
import { categories } from "../../assets/data";
import UserCard from "../../components/UserCard";
import { useResume } from "../../context-manager/ResumeContextProvider";
import { useEffect, useState } from "react";
import { states } from "../../assets/data";


export default function ExpertPage() {

  const { resume } = useResume()
  const [currentFreelancers, setCurrentFreelancers] = useState([])

  

  useEffect(() => {
    resume.length > 0 && setCurrentFreelancers(resume)
  }, [resume])
  
  
  function handleSearchQuery(data){
    let results = []
    const query = data.toLowerCase();

    if(data === 'All States' || data === 'All Categories'){
      results = resume
    }else{
      results = resume.filter(u => u.profession.toLowerCase().startsWith(query) || u.state.toLowerCase().startsWith(query))
    }
    if(results.length){
      setCurrentFreelancers(results)
    }
  }
  

  return (
    <div className='md:px-[3%] px-3 bg-gray-100'>
      <div className="md:flex items-center justify-between mt-">
        <h3 className="md:text-4xl text-xl">Search</h3>
        <div className="md:flex md:mt-4 mt-2">
          <div className="flex md:mb-0 mb-4">
            <DropDown data={states} actionHandler={handleSearchQuery} />
            <DropDown data={categories} actionHandler={handleSearchQuery} cName='md:w-[12rem] mx-2' />
          </div>
          <SearchBar actionHandler={handleSearchQuery} />
        </div>
      </div>
      <div className="md:py-8 p-3">
        <h3 className="text-4xl font-bold">Freelancers</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
          {currentFreelancers.length > 0 ? currentFreelancers.map(user => <UserCard user={user} />) : 'No data'}
        </div>
      </div>
    </div>
  )
}




function SearchBar({ actionHandler }){
  const [filter, setFilter] = useState([])
  const [queryText, setQueryText] = useState('')

  useEffect(() => {
    const result = categories.filter(c => c.toLowerCase().startsWith(queryText.toLowerCase()))
    result.length > 0 && setFilter(result)
  }, [queryText]);
  
  filter.includes(queryText) && setFilter([])

  function selectText(text){
    setFilter([])
    setQueryText(text)
  }

  const handleSubmit = e => {
    e.preventDefault()
    actionHandler(queryText)
  }
  
  return(
    <form className="flex md:w-[400px] flex-1 bg-red-200 h-[3rem] relative" onSubmit={handleSubmit}>
      <input 
        className="h-full md:flex-1 w-full bg-white border-none outline-none px-4" 
        type="text" 
        placeholder="Key word"
        value={queryText}
        onChange={e => setQueryText(e.target.value)}
      />
      <button className="flex items-center h-full px-5 bg-lightgreen text-white" type="submit">
        <FiSearch /> <span className="md:block hidden ml-1">Find</span>
      </button>
      {(queryText && filter.length > 0) &&
        <div className="absolute top-full left-0 right-0 z-40 bg-gray-50 shadow shadow-black/20">
          {filter.map((f, i) => (
            <div className="px-4 py-1 border-b" key={i} onClick={() => selectText(f)}>{f}</div>
          ))}
        </div>
      }
    </form>
  )
}


function DropDown({ data, actionHandler, cName='md:w-[7.8rem]' }) {

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(data[data.length - 1]);

  function handleTitleUpdate(text){
    return (e) => {
      setTitle(text)
      actionHandler(text)
    }
  }
  return (
    <div 
      className={`h-[3rem] ${cName} cursor-pointer w-full flex items-center justify-between relative  bg-white px-3`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
      <FiChevronDown />
      {isOpen && 
        <div 
          className="
            max-h-[350px] overflow-y-scroll absolute top-full left-0 z-40 w-[200px] 
            bg-gray-50 shadow border py-2
          "
          // onClick={e => e.stopPropagation()}
        >
          {data.map(text => (
            <span 
              className="px-4 py-2 block" 
              key={text} 
              onClick={handleTitleUpdate(text)}
            >
                {text}
              </span>
          ))}
        </div>
      }
    </div>
  )
}

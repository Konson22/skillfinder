import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react";
import { categories } from "../../assets/data";
import { DropDown } from "../experts";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const navigate = useNavigate()
  function actionHandler(data){
    navigate(`/freelancers?query=${data.toLowerCase()}`)
  }
  function handleSearchQuery(data){
    navigate(`/freelancers?query=${data.toLowerCase()}`)
  }

  return (
    <header className="header md:px-[8%] px-3 pb-2">
      <div className="md:w-[85%] md:py-[10rem] py-[5rem] text-white md:font-bold font-semibol">
        <h2 className="md:text-6xl text-3xl md:text-left text-center">Connecting You to Local Excellence & Create a Greate Opportunities</h2>
        <div className="flex md:w-[80%] md:bg-lightblue/80 text-gray-700 md:p-7 md:mt-8 mt-6">
          <div className="md:flex hidden">
            <DropDown title='Categories' data={categories} actionHandler={actionHandler} cName='md:w-[250px] w-auto h-[3.5rem] mr-2 px-5' />
          </div>
          <SearchBar actionHandler={handleSearchQuery} cName='mt-2' />
        </div>
      </div>
    </header>
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
    <div className="flex-1">
      <span className="md:block hidden m-1 text-white">Search by key word</span>
      <form className="flex w-full bg-red-200 h-[3.5rem] relative" onSubmit={handleSubmit}>
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
    </div>
  )
}

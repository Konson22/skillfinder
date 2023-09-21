import { FiSearch } from "react-icons/fi";
import { categories } from "../assets/categories";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import StatesDropDown from "./StatesDropDown";

export default function SearchBar({ width }) {

  const navigate = useNavigate()
  const [suggestion, setSuggestion] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentState, setCurrentState] = useState('All States');

  useEffect(() => {
    if(searchText){
      const results = categories.filter(c => c.title.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()))
      results.length > 0 && setSuggestion(results)
    }else{
      setSuggestion([])
    }
  }, [searchText])


  const handleClick = () => {
    navigate(`/search?city=${currentState}&category=${searchText}`)
  }
  return (
    <div className='flex justify-between text-gray-700 md:mt-3'>
      <StatesDropDown setCurrentState={setCurrentState} currentState={currentState} />
      <div className={`flex md:auto ${width} h-[3.5rem] rounded relative md:ml-3 ml-2`}>
        <input 
          className="h-full text-[1.1rem] w-full border-none outline-none px-4" 
          type="search" 
          placeholder="Search..." 
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button 
          className="
            h-full flex items-center bg-lightblue text-white px-5
          "
          onClick={handleClick}
        >
          <FiSearch /> <span className="md:block hidden">Search</span>
        </button>
        {(searchText && suggestion.length !== 0) && 
          <ul className={`absolute left-0 w-full top-full bg-white shadow-sm border rounded py-2`}>
            {suggestion.map(s => (
              <li className="px-4 py-1 text-left border-b cursor-pointer" onClick={() => {
                setSearchText(s.title)
                setSuggestion([])
              }}>{s.title}</li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}

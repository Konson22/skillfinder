import { FiSearch } from "react-icons/fi";
import DropDown from "./DropDown";
import { states } from "../assets/data";
import { categories } from "../assets/categories";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ width }) {

  const navigate = useNavigate()
  const [suggestion, setSuggestion] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentState, setCurrentState] = useState('All States');

  useEffect(() => {
    const sugguested = categories.filter(c => c.title.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()))
    sugguested.length > 0 && setSuggestion(sugguested)
  }, [searchText])


  const handleClick = () => {
    navigate(`/search?city=${currentState}&category=${searchText}`)
  }
  return (
    <div className='flex justify-between text-gray-700 mt-3'>
      <DropDown title='States' data={states} actionHandler={setCurrentState} cName="" />
      <div className={`flex md:auto ${width} h-[3rem] rounded relative md:ml-3 ml-2`}>
        <input 
          className="h-full w-full border-none outline-none px-4" 
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
          <FiSearch /> Find
        </button>
        {(suggestion.length > 0) && 
          <ul className={`absolute left-0 w-full top-full bg-white shadow-sm border rounded py-2`}>
            {suggestion.map(s => (
              <li className="px-4 py-1 cursor-pointer" onClick={() => {
                setSuggestion([])
                setSearchText(s.title)
              }}>{s.title}</li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}

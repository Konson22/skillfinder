import { FiChevronDown, FiSearch } from "react-icons/fi"
import { categories } from "../assets/categories";
import { states } from "../assets/data";
import { useState } from "react";


export default function SearchingCard() {
  
  return (
    <div className="md:flex md:mt-4 mt-2">
        <div className="flex md:mb-0 mb-4">
            <StateDropDown />
            <CategoryDropDown />
        </div>
        <SearchBar />
    </div>
  )
}


export function SearchBar(){
    return(
      <div className="flex flex-1 bg-red-200 h-[3rem]">
        <input className="h-full md:flex-1 w-full bg-white border-none outline-none px-4" type="text" placeholder="Key word" />
        <button className="flex items-center h-full px-5 bg-lightgreen text-white">
          <FiSearch /> <span className="md:block hidden ml-1">Find</span>
        </button>
      </div>
    )
}

export function CategoryDropDown() {

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
            <span className="px-4 py-2 block" key={categor.title}>{categor.title}</span>
          ))}
        </div>
      }
    </div>
  )
}


export function StateDropDown() {

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
            <span className="px-4 py-2 block" key={state}>{state}</span>
          ))}
        </div>
      }
    </div>
  )
}

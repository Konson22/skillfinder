import { FiChevronDown, FiSearch } from "react-icons/fi"
import { states } from "../../assets/data";
import { useState } from "react";
import { categories } from "../../assets/categories";


export default function Header() {
  return (
    <header className="header md:px-[8%] px-3 pb-2">
      <div className="text-center md:py-[10rem] py-[5rem] text-white md:font-semibold font-thin">
        <h2 className="md:text-6xl text-3xl">Connecting You to Local Excellence</h2>
        <h1 className="md:text-6xl text-3xl">& Create a Greate Opportunities</h1>
      </div>
      <div className="bg-lightblue/80 md:px-8 md:py-8 px-5 py-6 md:mx-[10%]">
        <span className="text-xl text-white">Search</span>
        <div className="md:flex md:mt-4 mt-2">
          <div className="flex md:mb-0 mb-4">
            <StateDropDown />
            <CategoryDropDown />
          </div>
          <div className="flex flex-1 bg-red-200 h-[3rem]">
            <input className="h-full md:flex-1 w-full bg-white border-none outline-none px-4" type="text" placeholder="Key word" />
            <button className="flex items-center h-full px-5 bg-lightgreen text-white">
              <FiSearch /> <span className="md:block hidden">Find Provider</span>
            </button>
          </div>
      </div>
      </div>
    </header>
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
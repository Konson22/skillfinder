import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"
import { states } from "../assets/data";

export default function StatesDropDown({ setCurrentState, currentState }){

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div 
      className={`
        h-[3.5rem] w-[130px] flex items-center justify-center px-4 bg-white rounded cursor-pointer relative
      `}
    //   onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
        <span className="text-[1.1rem]">{currentState}</span>
      
      <span className="">
        <FiChevronDown />
      </span>
      {isOpen &&
        <div className="absolute top-full left-0 w-[170px] shadow-md border rounded">
          {states && states.map((d, index) => (
            <div className="bg-white px-5 py-2 hover:bg-lightblue hover:text-white
              "
              onClick={() => setCurrentState(d)}
              key={index}
            >
              {d}
            </div>
          ))}
        </div>
      }
    </div>
  )
}

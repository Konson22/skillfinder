import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"
import { categories } from "../assets/categories";


export default function DropDown({ title, data, actionHandler, cName='' }){

  const [isOpen, setIsOpen] = useState(false);
  

  return(
    <div 
      className={`
        h-[3rem] flex items-center px-4 bg-white rounded cursor-pointer relative ${cName}
      `}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {title}
      <span className="">
        <FiChevronDown />
      </span>
      {isOpen &&
        <div className="absolute top-full left-0 w-[170px] shadow-md border rounded">
          {data && data.map((d, index) => (
            <div className="bg-white px-5 py-2 hover:bg-lightblue hover:text-white
              "
              onClick={() => actionHandler(d)}
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


export function CategoriesDropDown({ cName='' }){

  const [currentCategory, setCurrentCategory] = useState('All Categories');
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div 
      className={`
        h-[3rem] flex items-center px-4 bg-white rounded cursor-pointer relative ${cName}
      `}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {currentCategory.slice(0,20)}
      <span className="">
        <FiChevronDown />
      </span>
      {isOpen &&
        <div className="absolute top-full left-0 w-[250px] max-h-[300px] overflow-y-scroll shadow-md border rounded">
          {categories && categories.map(category => (
            <div className="bg-white px-5 py-2 hover:bg-lightblue hover:text-white"
              onClick={() => setCurrentCategory(category.title)}
            >
              {category.title}
            </div>
          ))}
        </div>
      }
    </div>
  )
}
  
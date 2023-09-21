import { FiSearch } from "react-icons/fi"


export default function Header() {
  return (
    <header className="header md:px-[8%] px-3 pb-2">
      <div className="text-center md:py-[10rem] py-[5rem] text-white md:font-semibold font-thin">
        <h2 className="md:text-6xl text-3xl">Connecting You to Local Excellence</h2>
        <h1 className="md:text-6xl text-3xl">& Create a Greate Opportunities</h1>
      </div>
      <div className="bg-lightblue/80 md:px-8 md:py-8 px-5 py-6 md:mx-[10%]">
        <span className="text-xl text-white">Search</span>
        <SearchingCard />
      </div>
    </header>
  )
}


function SearchingCard(){
  return(
    <div className="md:flex md:mt-4 mt-2">
      <div className="flex md:mb-0 mb-4">
        <div className="h-[3rem] md:w-auto w-full bg-white md:px-3 md:mr-0 mr-1">
          <select className="h-full bg-transparent border-none outline-none">
            <option value="">All States</option>
          </select>
        </div>
        <div className="h-[3rem] md:w-auto w-full bg-white md:px-3 md:mx-2 ml-1">
          <select className="h-full bg-transparent border-none outline-none">
            <option value="">Category</option>
          </select>
        </div>
      </div>
      <div className="flex flex-1 bg-red-200 h-[3rem]">
        <input className="h-full md:flex-1 w-full bg-white border-none outline-none px-4" type="text" placeholder="Key word" />
        <button className="flex items-center h-full px-5 bg-lightgreen text-white">
          <FiSearch /> <span className="md:block hidden">Find Provider</span>
        </button>
      </div>
    </div>
  )
}
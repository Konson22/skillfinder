import SearchBar from "../../components/SearchBar";


export default function Header() {
  return (
    <header 
        className="
            header md:h-[75vh] h-[50vh] flex items-center justify-centerr text-white
            bg-gray-700 md:px-[15%] px-3
        "
    >
        <div className="md:text-left text-center">
            <h2 className="md:text-5xl text-3xl font-thin">Let's Work with each others & Create</h2>
            <h1 className="md:text-7xl text-3xl font-bold text-yellow-400">Greate Opportunities</h1>
            {/* <h2 className="md:text-5xl text-3xl font-thin">Connecting You to Local Excellence & Create</h2>
            <h1 className="md:text-7xl text-3xl font-bold text-yellow-400">Greate Opportunities</h1> */}
            <div className="mt-12">
                <h3 className="md:text-2xl text-xl text-left">Search now</h3>
                <SearchBar width='md:flex-1' />
            </div>
        </div>
    </header>
  )
}

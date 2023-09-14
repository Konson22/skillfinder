import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header md:h-[75vh] h-[50vh] flex items-center justify-centerr text-white bg-gray-700 md:px-[15%] px-4">
        <div className="md:text-left text-center">
            <h2 className="md:text-5xl text-3xl font-thin">Let's Work with each others & Create</h2>
            <h1 className="md:text-7xl text-3xl font-bold text-yellow-400">Greate Opportunities</h1>
            {/* <h2 className="md:text-5xl text-3xl font-thin">Connecting You to Local Excellence & Create</h2>
            <h1 className="md:text-7xl text-3xl font-bold text-yellow-400">Greate Opportunities</h1> */}
            <div className="flex md:justify-start justify-center mt-10">
                <Link 
                    className="
                    flex items-center bg-green-500 rounded-md md:text-xl px-5 py-3 mr-3
                    "
                    to='/job-seeker'
                >
                    Join Our Community
                </Link>
            </div>
        </div>
    </header>
  )
}

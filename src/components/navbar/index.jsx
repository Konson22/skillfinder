import { FaBars } from 'react-icons/fa'
import { FiBell, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
    <nav className="md:h-[4.5rem] h-[4rem] bg-gray-700 text-white flex items-center justify-between sticky top-0 left-0 px-[5%] z-50">
      <div className="md:hidden block text-xl mr-3">
        <FaBars />
      </div>
      <div className="flex items-center text-white mr-6">
        <div className="md:h-[2.5rem] md:w-[2.5rem] h-[2.3rem] w-[2.3rem]">
          <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="" />
        </div>
        <span className="md:text-3xl font-san">ServiceConnect</span>
      </div>
      <div className="md:block hidden flex-1">
        <ul className='flex font-semibold'>
          {links.map(link => (
            <li className="">
              <Link className='px-6' to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="md:block hidden bg-lightgreen text-white px-5 py-2 rounded mx-5">Job Seekes</button>
      <div className="flex items-center">
        <div className="md:text-3xl text-xl relative">
          <FiBell className='text-white' />
          <div className="md:h-[20px] md:w-[20px] h-[15px] w-[15px] flex items-center justify-center rounded-full absolute right-[-.4rem] top-[-.4rem] text-[.5rem] bg-red-600">
            9+
          </div>
        </div>
        <div className="md:text-3xl text-2xl relative mx-5">
          <FiMail />
          <div className="md:h-[20px] md:w-[20px] h-[15px] w-[15px] flex items-center justify-center rounded-full absolute right-[-.4rem] top-[-.4rem] text-[.5rem] bg-red-600">
            9+
          </div>
        </div>
        <div className="md:h-[40px] md:w-[40px] h-[35px] w-[35px] rounded-full overflow-hidden">
          <img src={process.env.PUBLIC_URL+'/images/Image-22.png'} alt="" />
        </div>
      </div>
    </nav>
    </>
  )
}


const links = [
  {text:'Home', path:'/'},
  {text:'Experts', path:'/freelancers'},
  {text:'Providers', path:'/providers'},
  {text:'Jobs', path:'/jobs'},
  {text:'Contact Us', path:'/contact'},
]
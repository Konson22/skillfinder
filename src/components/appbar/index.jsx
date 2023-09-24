import { useState } from "react"
import { FaBars, FaChevronDown, FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaSignOutAlt, FaTwitter, FaUser, FaUserPlus } from "react-icons/fa"
import { FiBell, FiMail, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useGlobalApi } from "../../context-manager/GlobalContextProvider";


export default function Appbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const {profile } = useGlobalApi()

  const logoContent = (
    <div className="flex items-center text-lightblue mr-6">
      <div className="md:h-[2.5rem] md:w-[2.5rem] h-[2.3rem] w-[2.3rem]">
        <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="" />
      </div>
      <span className="md:text-3xl font-san">ServiceConnect</span>
    </div>
  )


  function toggleNavbar(){
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="md:flex hidden items-center justify-between px-[5%] py-2 bg-lightblue text-white">
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <FiMail className="text-base mr-2" /> info@serviceconnect.com
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-base mr-2" /> +211920079070
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <span className="text-base border rounded p-1 ml-2">
              <FaFacebook />
            </span>
            <span className="text-base border rounded p-1 ml-2">
              <FaInstagram />
            </span>
            <span className="text-base border rounded p-1 ml-2">
              <FaTwitter />
            </span>
            <span className="text-base border rounded p-1 ml-2">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white px-[5%] md:py-0 py-3 flex items-center justify-between sticky top-0 left-0 right-0 z-50">
        <div className="md:hidden block text-2xl" onClick={toggleNavbar}>
          <FaBars />
        </div>
        {logoContent}
        <div className={`
            flex-1 mobile-nav ${isOpen ? 'show':'hide'}
            md:static fixed inset-0 md:bg-transparent bg-lightblue/70 z-50
          `}
        >
          <ul className={`md:flex h-full w-[80%] font-semibold inner-mobile-nav md:bg-transparent bg-white ${isOpen ? 'show':'hide'}`}>
            <div className="md:hidden bg-gray-800 p-3 flex justify-between items-center">
              {logoContent}
              <span className="text-xl border rounded p-1" onClick={toggleNavbar}>
                <FiX />
              </span>
            </div>
            {links.map(link => (
              <li className="" key={link.text}>
                <Link className='md:p-6 p-2 block' to={link.path} onClick={toggleNavbar}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {profile ? 
          <div className="flex items-center">
            <div className="text-[1.7rem] relative mx-6 cursor-pointer" onClick={() => setOpenNotifications(!openNotifications)}>
              <FiBell />
              <span className="
                bg-rose-500 h-5 w-5 text-white rounded-full text-[.6rem] 
                absolute right-[-.4rem] top-[-.3rem] flex items-center justify-center
              ">
                9
              </span>
              {openNotifications &&
                <div className="text-sm absolute top-[120%] md:left-0 md:w-[220px] right-0 bg-white rounded border shadow">
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FiMail className="mr-1" />
                    Message From Samson
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FiMail className="mr-1" />
                    Message From Samson
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FiMail className="mr-1" />
                    Message From Samson
                  </li>
                </div>
              }
            </div>
            <div className="flex items-center cursor-pointer relative" onClick={() => setOpenDropDown(!openDropDown)}>
              <div className="md:h-[2rem] md:w-[2rem] h-[2.3rem] w-[2.3rem] rounded-full overflow-hidden">
                <img src={process.env.PUBLIC_URL+'/images/Image-2.png'} alt="" />
              </div>
              <span className="md:block hidden mx-2">{profile.name}</span>
              <FaChevronDown className={`duration-300 ${openDropDown ? 'rotate-[180deg]':''}`} />
              {openDropDown &&
                <div className="text-sm absolute top-[120%] md:left-0 md:w-full w-[150px] right-0 bg-white rounded border shadow">
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FaUser className="mr-1" />
                    Profile
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FaUser className="mr-1" />
                    My Resume
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FaUser className="mr-1" />
                    My Work
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-sky-200">
                    <FaSignOutAlt className="mr-1" />
                    Logout
                  </li>
                </div>
              }
            </div>
          </div>:
          <div className="flex items-center text-white">
            <Link className="bg-lightgreen px-5 py-2 rounded flex items-center" to='/login'><FaUser /> Login</Link>
            <Link className="md:flex hidden bg-lightblue px-3 py-2 rounded items-center ml-3" to='/signup'><FaUserPlus /> Sign up</Link>
          </div>
        }
      </div>
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
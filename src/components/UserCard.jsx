import { FaFacebookMessenger, FaLinkedinIn } from "react-icons/fa"
import { FiHeart, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"


export default function UserCard({user}) {
  return (
    <div className="bg-white shadow-md rounded">
        <div className="md:h-[200px] h-[250px] p-2">
            <img src={user.avatar_url} alt="" />
        </div>
        <div className="flex-1 p-3">
            {/* <div className="flex">
                <span className="mr-1">
                    <FaStar />
                </span>
                <span className="mr-1">
                    <FaStar />
                </span>
                <span className="mr-1">
                    <FaStar />
                </span>
                <span className="mr-1">
                    <FaStar />
                </span>
                <span className="mr-1">
                    <FaStar />
                </span>
            </div> */}
            <h3 className="text-xl font-semibold">{user.name ? user.name : user.login}</h3>
            <h3 className="text-xl font-thin">{user.profession}</h3>
            <span className="text-">{user.location}</span>
            {/* <p>{user.bio}</p> */}
        </div>
        <div className="flex justify-between items-center border-t p-2 bg-gray-100">
            <Link className="bg-green-500 text-white px-3 py-1 rounded block w-[max-content]" to={`/profile/${user._id}`}>
                View Profile
            </Link>
            <div className="flex items-center">
                <span className="text-2xl hover:bg-lightblue hover:text-white p-1 ml-2">
                    <FiHeart />
                </span>
                <span className="text-2xl hover:bg-lightblue hover:text-white p-1 ml-2">
                    <FiMail />
                </span>
                <span className="text-2xl hover:bg-lightblue hover:text-white p-1 ml-2">
                    <FaFacebookMessenger />
                </span>
                <span className="text-2xl hover:bg-lightblue hover:text-white p-1 ml-2">
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
    </div>
  )
}

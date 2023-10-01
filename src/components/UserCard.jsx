import { FaUser } from "react-icons/fa"
import { FiHeart, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"


export default function UserCard({user}) {
  return (
    <div className="bg-white shadow-md rounded" key={user._id}>
        <div className="md:h-[200px] h-[250px] p-2">
            {user.profile_image ? 
                <img src={`https://hope4child-api.onrender.com/images${user.profile_image}`} alt="" />:
                <FaUser />
            }
        </div>
        <div className="flex-1 p-3">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <h3 className="text-xl font-thin">{user.profession}</h3>
            <span className="text-">{user.state}</span>
            <p>{user.bio}</p>
        </div>
        <div className="flex justify-between items-center border-t p-2 bg-gray-100">
            <Link className="bg-green-500 text-white px-3 py-1 rounded block w-[max-content]" to={`/profile/${user._id}`}>
                View Profile
            </Link>
            <div className="flex items-center">
                <span className="flex items-center text-2xl border hover:text-rose-500 p-1 ml-2">
                    <FiHeart />
                    <div className="text-sm">{user.rated}</div>
                </span>
                <span className="text-2xl border hover:text-rose-500 p-1 ml-2">
                    <FiMail />
                </span>
            </div>
        </div>
    </div>
  )
}

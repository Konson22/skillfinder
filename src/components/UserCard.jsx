import { FaStar, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


export default function UserCard({user}) {
  return (
    <div className="bg-white shadow-md rounded" key={user._id}>
        <div className="md:h-[230px] h-[250px] p-2">
            {user.profile_image ? 
                <img src={user.profile_image} alt="" />:
                <FaUser />
            }
        </div>
        <div className="flex-1 p-3">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <h3 className="text-xl font-thin">{user.profession}</h3>
            <span className="text-">{user.state}</span>
            <p className="line-clamp-2">{user.bio}</p>
        </div>
        <div className="flex justify-between items-center border-t p-2 bg-gray-100">
            <Link className="bg-green-500 text-white px-3 py-1 rounded block w-[max-content]" to={`/profile/${user.id}`}>
                View Profile
            </Link>
            <div className="flex items-center">
                <span className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" /> <span className="font-bold block mr-2">4.8</span> <span className="text-sm">(12 review)</span>
                </span>
            </div>
        </div>
    </div>
  )
}

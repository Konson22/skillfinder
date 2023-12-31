import { FaStar } from "react-icons/fa";
import { Heading1 } from "../../components/HeadingText";
import { Link } from "react-router-dom";
import { useResume } from "../../context-manager/ResumeContextProvider";


export default function FeaturedSection() {

  const { resume } = useResume()

  return (
    <div className="featured-section py-[4rem] px-[8%]">
      <Heading1 text='Featured Freelancers' cName="text-center text-white" />
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mt-6">
        {resume.length > 0 ? 
            resume.map((user, index) => (
                <div className="bg-white" key={index}>
                    <div className="md:h-[250px] h-[230px] relative">
                        <img src={user.profile_image} alt="" />
                        <span className="bg-orange-500 text-white absolute bottom-2 left-2 px-3 py-1 rounded">
                            {user.profession}
                        </span>
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-2xl">{user.name}</h3>
                        <p className="text-base line-clamp-3">{user.bio}</p>
                        <div className="flex justify-center">
                            <span className="p-1">
                                <FaStar />
                            </span>
                            <span className="p-1">
                                <FaStar />
                            </span>
                            <span className="p-1">
                                <FaStar />
                            </span>
                            <span className="p-1">
                                <FaStar />
                            </span>
                            <span className="p-1">
                                <FaStar />
                            </span>
                        </div>
                    </div>
                    <div className="flex">
                        <Link className="text-center w-full py-3 text-white bg-lightblue" to={`/profile/${user.id}`}>Profile</Link>
                        <button className="w-full py-3 text-white bg-lightgreen">Hire Me</button>
                    </div>
                </div>
            )):
            <div className="">No Data</div>
        }
      </div>
    </div>
  )
}


import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFreelancers } from "../../context-manager/FreelancersContextProvider";


export default function Profile() {

    const { freelancers } = useFreelancers()
    const [profile, setProfile] = useState(null);
    const { profileId } = useParams();
    const [currentContent, setCurrentContent] = useState('Profile');
  
    useEffect(() => {
      // eslint-disable-next-line eqeqeq
      const res = freelancers.filter(user => user._id == profileId)[0]
      res && setProfile(res)
      
    }, [profileId, freelancers])

  return (
    <div className="md:mx-[5%] bg-white">
      {profile ?
        <>
          <div className="md:flex items-center bg-lightblue/50 text-white px-[5%] py-6">
            <div className="md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full overflow-hidden mx-auto my-0">
              <img src={profile.avatar} alt="" />
            </div>
            <div className="flex-1 px-6 md:text-left text-center">
              <h2 className="md:text-5xl text-3xl font-semibold">{profile.name}</h2>
              <h3 className="text-3xl font-thin">{profile.profession}</h3>
              <h3 className="text-2xl font-thin">Address: {profile.state}</h3>
            </div>
          </div>
          <div className="flex bg-lightblue/80 text-white px-[5%] py-2">
            <ul className="flex">
              {links.map(l => (
                <li className={`px-4 py-1 mr-3 rounded cursor-pointer ${currentContent === l ? 'border ':''}`} onClick={() => setCurrentContent(l)}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-[5%] py-4">
            <h3 className="text-3xl">{currentContent}</h3>
            {currentContent === 'Profile' && <ProfileContent />}
            {currentContent === 'Education' && <EducationContent />}
            {currentContent === 'Reviews' && <ReviewsContent />}
          </div>
        </>
        :
        <div className="">Loading</div>
      }
    </div>
  )
}

function ProfileContent(){
    return(
      <div className="">
        <p>
          Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the go-to resource for individuals and families seeking top-notch services from their neighbors and local businesses.
        </p>
      </div>
    )
  }
  
  function EducationContent(){
    return(
      <div className="">
      </div>
    )
  }
  
  function ReviewsContent(){
    return(
      <div className="">
      </div>
    )
  }

const links = ['Profile', 'Resume', 'Reviews']
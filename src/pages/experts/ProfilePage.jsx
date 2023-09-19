import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFreelancers } from "../../context-manager/FreelancersContextProvider";


export default function ProfilePage() {

  const { freelancers } = useFreelancers()
  const [profile, setProfile] = useState(null);
  const { freelancerId } = useParams();
  const [currentContent, setCurrentContent] = useState('Profile');

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const res = freelancers.filter(user => user._id == freelancerId)[0]
    res && setProfile(res)
    
  }, [freelancerId, freelancers])

  return (
    <div className="mx-[5%] bg-white">
      {profile ?
        <>
          <div className="flex items-center bg-lightblue/50 text-white px-[5%] py-6">
            <div className="md:h-[200px] md:w-[200px] rounded-full overflow-hidden">
              <img src={profile.avatar} alt="" />
            </div>
            <div className="flex-1 px-6">
              <h2 className="text-5xl font-semibold">{profile.name}</h2>
              <h3 className="text-3xl font-thin">Software Engineer</h3>
              <h3 className="text-2xl font-thin">Address: Juba, Hai Malakia</h3>
            </div>
          </div>
          <div className="flex bg-lightblue/80 text-white px-[5%] py-4">
            <ul className="flex">
              {links.map(l => (
                <li className={`border px-4 py-2 mr-3 rounded cursor-pointer ${currentContent === l ? 'bg-white text-lightblue':''}`} onClick={() => setCurrentContent(l)}>
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


const links = ['Profile', 'Education', 'Reviews']

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
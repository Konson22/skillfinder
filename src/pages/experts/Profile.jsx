import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useResume } from "../../context-manager/ResumeContextProvider";
import ProfileCard from "../../components/ProfileCard";


export default function Profile() {

  const { resume } = useResume()
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();
  
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const res = resume.filter(user => user.id == profileId)[0]
    res && setProfile(res)
    
  }, [profileId, resume])

    
  return profile ? <ProfileCard profile={profile} /> :
    <div className="">Loading....</div>
}

// function ProfileContent(){
//     return(
//       <div className="">
//         <p>
//           Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the go-to resource for individuals and families seeking top-notch services from their neighbors and local businesses.
//         </p>
//       </div>
//     )
//   }
  
//   function EducationContent(){
//     return(
//       <div className="">
//       </div>
//     )
//   }
  
//   function ReviewsContent(){
//     return(
//       <div className="">
//       </div>
//     )
//   }

// const links = ['Profile', 'Resume', 'Reviews']
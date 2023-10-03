import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useResume } from "../../context-manager/ResumeContextProvider";
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaStarHalf, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function Profile() {

    const { resume } = useResume()
    const [profile, setProfile] = useState(null);
    const { profileId } = useParams();
  
    useEffect(() => {
      // eslint-disable-next-line eqeqeq
      const res = resume.filter(user => user.id == profileId)[0]
      res && setProfile(res)
      
    }, [profileId, resume])


    const contactContent = (cName='') => {
      return (
        <div className={`mt-7 ${cName}`}>
          <h3 className="text-2xl">Contacts</h3>
          <ul>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaMapMarkerAlt /></div> Juba, Malakia
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaPhoneAlt /></div> +211920079070
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaWhatsapp /></div> +211920079070
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FiMail /></div> konsonak@gmail.com
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaLinkedinIn /></div> @konsonak
            </li>
          </ul>
        </div>
      )
    }
    const socialMediaContent = (cName='') => {
      return (
        <div className={`mt-7 ${cName}`}>
          <h3 className="text-2xl">Social media</h3>
          <ul>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaMapMarkerAlt /></div> Juba, Malakia
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaPhoneAlt /></div> +211920079070
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaWhatsapp /></div> +211920079070
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FiMail /></div> konsonak@gmail.com
            </li>
            <li className="flex items-center py-2">
              <div className="border rounded-full p-1 mr-2"><FaLinkedinIn /></div> @konsonak
            </li>
          </ul>
        </div>
      )
    }
  return (
    <div className="md:mx-[5%] bg-white">
      {profile ?
        <div className="md:flex bg-gray-100">
          <div className="md:w-[30%] bg-lightblue text-white p-8">
            <div className="clip md:h-[200px] h-[150px] md:w-[200px] w-[150px] overflow-hidden mx-auto my-0">
              <img src={profile.profile_image} alt="" />
            </div>
            <div className="text-center mt-7">
              <span className="text-2xl">Rated</span>
              <div className="flex justify-center text-yellow-400 text-xl mt-2">
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStarHalf className="mx-1" />
              </div>
            </div>
            {contactContent('md:block hidden')}
            {socialMediaContent('md:block hidden')}
          </div>
          <div className="flex-1 md:p-8 p-4">
            <h3 className="md:text-6xl text-4xl text-lightblue font-bold">{profile.name}</h3>
            <h3 className="md:text-4xl text-3xl">{profile.profession}</h3>
            <div className="md:mt-7 mt-3">
              <h4 className="text-2xl font-bold">About me</h4>
              <p>{profile.bio} Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the go-to resource for individuals and families seeking top-notch services from their neighbors and local businesses.</p>
            </div>
            {/* start of education */}
            <div className="mt-7">
              <h4 className="w-[max-content] bg-lightblue text-white text-2xl pl-4 pr-8 rounded py-1">EDUCATION</h4>
              <div className="mt-2">
                <h4 className="text-2xl font-semibold">{profile.insitute}</h4>
                <h5 className="text-xl font-semibold mb-2"><span>College of </span> {profile.college}</h5>
                <p>
                  I am a web developer with an influential personality who wants to pursue a competitive and technical career as a Web Developer. Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the
                </p>
              </div>
            </div>
            <div className="mt-7">
              <h4 className="w-[max-content] bg-lightblue text-white text-2xl pl-4 pr-8 rounded py-1">Work Experience</h4>
              <div className="mt-2">
                <h4 className="text-2xl font-semibold">Southern Sudan Beverage Limited</h4>
                <h5 className="text-xl font-semibold mb-1">Position: Position</h5>
                <p>
                  I am a web developer with an influential personality who wants to pursue a competitive and technical career as a Web Developer. Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the
                </p>
              </div>
              <div className="mt-2">
                <h4 className="text-2xl font-semibold">Southern Sudan Beverage Limited</h4>
                <h5 className="text-xl font-semibold mb-1">Position: Position</h5>
                <p>
                  I am a web developer with an influential personality who wants to pursue a competitive and technical career as a Web Developer. Our vision is simple yet powerful: to foster stronger, more connected communities by bridging the gap between residents and the exceptional local services that surround them. We aspire to be the
                </p>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="">Loading</div>
      }
    </div>
  )
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
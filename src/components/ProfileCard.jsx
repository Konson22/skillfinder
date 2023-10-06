import { FaAt, FaFacebook, FaHeart, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCamera, FiMail } from "react-icons/fi";

export default function ProfileCard({ profile, isOwner=false }) {
  return (
    <div className="mb-8">
    <div className="profile-header bg-sky-400 md:h-[240px] h-[150px]">
    </div>
    <div className="md:flex md:px-[8%] px-3">
      <div className="md:px-[4rem] md:border px-7 py-6">
        <div className="md:h-[200px] h-[150px] md:w-[200px] w-[150px] md:mt-[-60px] mt-[-80px] rounded-full mx-auto relative">
          <img className="rounded-full border-4" src={profile.profile_image} alt="" />
          {!isOwner && 
            <div className="md:text-2xl text-xl bg-gray-100 rounded-full absolute top-[60%] right-[-.5rem] p-2 border-2">
              <FiCamera />
            </div>
          }
        </div>
        <h3 className="text-2xl font- text-center my-">{profile.name}</h3>
        <span className="text-xl font-thin block text-center">{profile.profession}</span>
        <address className="text-base font-thin flex items-center justify-center text-center">
          <FaMapMarkerAlt className="text-sm" />
          {profile.state}
        </address>
        <div className="flex justify-evenly text-lightblue my-3">
          <span className="text-xl">
            <FaFacebook />
          </span>
          <span className="text-xl">
            <FaTwitter />
          </span>
          <span className="text-xl">
            <FiMail />
          </span>
          <span className="text-xl">
            <FaLinkedinIn />
          </span>
        </div>
        <button className="w-full bg-lightblue text-white rounded py-2">Hire Me</button>
      </div>
      <div className="flex-1 md:p-4">
        <div className="mb-5">
          <h3 className="text-xl font-semibold">About me</h3>
          <p>
            {profile.bio}
            Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">My Skills</h3>
          <p>
            Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p>
            Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs
          </p>
        </div>
      </div>
      <div className="px-10 py-5 mt-4">
        <div className="flex justify-between">
          <span className="flex items-center">
            <FaStar className="text-2xl text-yellow-400" /> 4.5
          </span>
          <span className="flex items-center">
            <FaHeart className="text-2xl text-yellow-400" /> 4.5
          </span>
        </div>
        <ul>
          <li className="flex items-center py-2">
            <FaMapMarkerAlt className="mr-2" />
            Juba, Hai Malakal
          </li>
          <li className="flex items-center py-2">
            <FaPhoneAlt className="mr-2" />
            +211920079070
          </li>
          <li className="flex items-center py-2">
            <FaWhatsapp className="mr-2" />
            +211920079070
          </li>
          <li className="flex items-center py-2">
            <FaAt className="mr-2" />
            konsonak@gmail.com
          </li>
        </ul>
      </div>
    </div>
    <div className="px-[8%] border-t py-5 mt-7">
      <span className="text-3xl font-bold">Portfolio</span>
    </div>
  </div>
  )
}

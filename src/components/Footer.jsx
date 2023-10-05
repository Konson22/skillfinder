import { FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FiMail } from "react-icons/fi"



export default function Footer() {
  return (
    <footer className="bg-lightblue text-white">
      <div className="md:flex bg-lightblue px-[8%] md:py-[2rem] py-6">
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-2">About</h4>
          <p>
            Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs.
          </p>
          <div className="mt-6">
            <div className="flex text-3xl mt-8">
              <span className="mr-4"><FaLinkedinIn /></span>
              <span className="mr-4"><FaFacebook /></span>
              <span className="mr-4"><FaInstagram /></span>
              <span className="mr-4"><FaTwitter /></span>
              <span className="mr-4"><FaPinterest /></span>
            </div>
          </div>
        </div>
        <div className="md:my-0 mt-5">
          <h4 className="text-xl font-bold mb-2">About</h4>
          <ul>
            <li className="py-1">Press & News</li>
            <li className="py-1">Partnerships</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms of Service</li>
            <li className="py-1">Intellectual Property Claims</li>
          </ul>
        </div>
        <div className="md:mx-14 md:my-0 my-5">
          <h4 className="text-xl font-bold mb-2">Support and Education</h4>
          <ul>
            <li className="py-1">Help & Support</li>
            <li className="py-1">Trust & Safety</li>
            <li className="py-1">Selling on 24Connect</li>
            <li className="py-1">Buying on 24Connect</li>
            <li className="py-1">24Connect Guides</li>
            <li className="py-1">24Connect Workspace</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl font-bold mb-2">Contacts</h4>
          <ul>
            <li className="flex items-center py-1">
              <div className="border rounded-full p-1 mr-2">
                <FaMapMarkerAlt />
              </div>
              Juba, Hai Mauna
            </li>
            <li className="flex items-center py-1">
              <div className="border rounded-full p-1 mr-2">
                <FaPhoneAlt />
              </div>
              +211920079070
            </li>
            <li className="flex items-center py-1">
              <div className="border rounded-full p-1 mr-2">
                <FaWhatsapp />
              </div>
              +211920079070
            </li>
            <li className="flex items-center py-1">
              <div className="border rounded-full p-1 mr-2">
                <FiMail />
              </div>
              info@connectservice.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between border-t md:py-3 py-4 px-[8%]">
        <span>&copy; copy right reserved for {new Date().getFullYear()}</span>
        <span></span>
      </div>
    </footer>
  )
}






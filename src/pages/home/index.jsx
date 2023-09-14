import Header from "./Header";
import HowItWorkSection from "./HowItWorkSection";
import JoinSection from "./JoinSection";
import GetStartedSection from "./GetStartedSection";
import WhyUsSection from "./WhyUsSection";
import FeaturedSection from "./FeaturedSection";
import StaticSection from "./StaticSection";
import TestimonialSection from "./TestimonialSection";
import { FiChevronDown } from "react-icons/fi";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="md:flex items-center bg-lightblue rounded-md md:px-8 px-4 md:py-10 py-7 md:mx-[15%] mx-3 md:mt-[-4rem] mt-[-2rem]">
        <div className="md:mb-0 mb-5">
          <span className="md:text-3xl text-white">Local Help, Right at Your Fingertips.</span>
        </div>
        <div className="flex-1 flex">
          <div className="h-[3rem] flex items-center bg-white rounded md:px-5 px-2">
            Categories
            <span className="">
              <FiChevronDown />
            </span>
          </div>
          <div className="h-[3rem] flex items-center bg-white rounded md:px-5 px-2 md:mx-3 mx-2">
            State
            <span className="">
              <FiChevronDown />
            </span>
          </div>
          <div className="h-[3rem] flex items-center bg-white rounded md:px-5 px-2">
            City
            <span className="">
              <FiChevronDown />
            </span>
          </div>
          <button className="h-[3rem] flex items-center bg-yellow-500 md:text-xl md:px-5 px-4 ml-2">
            Find
          </button>
        </div>
      </div>
      <div className="md:px-[17%] px-4 py-[5rem] md:text-2xl md:text-center mt-">
        <p>
        At SkillFinder we believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, a trusted pet sitter, or any other service provider, our platform is designed to connect you with the best professionals in your local area.
        
        </p>
      </div>
      <WhyUsSection />
      <HowItWorkSection />
      <FeaturedSection />
      <StaticSection />
      <JoinSection />
      <GetStartedSection />
      <TestimonialSection />
    </div>
  )
}


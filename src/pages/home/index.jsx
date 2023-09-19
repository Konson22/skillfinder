import Header from "./Header";
import HowItWorkSection from "./HowItWorkSection";
import JoinSection from "./JoinSection";
import GetStartedSection from "./GetStartedSection";
import WhyUsSection from "./WhyUsSection";
import FeaturedSection from "./FeaturedSection";
import StaticSection from "./StaticSection";
import TestimonialSection from "./TestimonialSection";
import { FiChevronDown } from "react-icons/fi";
import CategorySection from "./CategorySection";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="md:px-[17%] px-4 md:mt-[3rem] mt-[1.5rem] md:text-2xl md:text-center mt-">
        <p>
        At SkillFinder we believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, a trusted pet sitter, or any other service provider, our platform is designed to connect you with the best professionals in your local area.
        
        </p>
      </div>
      <CategorySection />
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


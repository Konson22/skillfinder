import CategorySection from "./CategorySection";
import FeaturedSection from "./FeaturedSection";
import Header from "./Header";
import HowItWorkSection from "./HowItWorkSection";
import JobSection from "./JobSection";
import TestimonialSection from "./TestimonialSection";
import WhyUsSection from "./WhyUsSection";


export default function MainPage() {
  return (
    <div>
      <Header />
      <HowItWorkSection />
      <FeaturedSection />
      <CategorySection />
      <div className="md:px-[19%] px-4 py-[5rem] bg-dark text-white text-center">
        <h2 className='md:text-5xl text-3xl font-bold mb-2'><span className="text-lightgreen">350</span> Providers Follow Us</h2>
        <p>
          Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals in your area or join our community as a service provider. Together, we make it easier for residents to find the expertise they need right in their neighborhood.
        </p>
      </div>
      <JobSection />
      <WhyUsSection />
      <TestimonialSection />
    </div>
  )
}

import { Heading1 } from "../../components/HeadingText";


export default function WhyUsSection() {
  return (
    <div className='md:flex md:bg-lightblue rounded-md md:text-white md:mx-0 mx-4'>
      <div className="md:w-[40%] relative">
        <img src={process.env.PUBLIC_URL+'/images/welder-673559_1280.jpg'} alt="" />
        <div className="absolute inset-0 md:hidden flex items-center justify-center text-white">
          <h3 className="text-4xl font-bold">WHY CHOOSE US?</h3>
        </div>
      </div>
      <div className="flex-1 md:p-12 md:mt-0 mt-8">
        <Heading1 text='WHY CHOOSE US?' cName="md:block hidden" />
        {data.map(us => (
          <div className="flex mb-5" key={us.title}>
            <div className="md:h-[55px] h-[45px] md:w-[55px] w-[45px] border border-lightblue bg-white md:p-3 p-1 rounded-full overflow-hidden mr-4">
              <img src={us.image} alt="" />
            </div>
            <div className="flex-1">
              <span className="text-2xl font-ssemibold">{us.title}</span>
              <p className="line-clamp-3">{us.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


const data = [
  {
    title:'Local Expertise',
    text:`We understand the importance of supporting local businesses and professionals. That's why we exclusively feature service providers in your area, ensuring you receive personalized and attentive service.`,
    image:process.env.PUBLIC_URL+'/images/man-1459246_1280.png'
  },
  {
    title:'Verified Providers',
    text:`We take your satisfaction seriously. All service providers listed on our platform undergo a rigorous verification process, including background checks and customer reviews, to ensure you're connected with reliable professionals.`,
    image:process.env.PUBLIC_URL+'/images/security.png'
  },
  {
    title:'Convenience',
    text:`Our user-friendly platform allows you to easily search for services based on your location, preferences, and needs. With just a few clicks, you can find the perfect local service provider for your requirements.`,
    image:process.env.PUBLIC_URL+'/images/check-mark.png'
  },
  {
    title:'Comprehensive Categories',
    text:`Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs.`,
    image:process.env.PUBLIC_URL+'/images/chat.png'
  },
  {
    title:'Reviews and Ratings',
    text:`Transparency matters. Access reviews and ratings from previous customers to make informed decisions about the service providers you choose. Leave your own feedback to help others in your community.`,
    image:process.env.PUBLIC_URL+'/images/rating.png'
  },
]
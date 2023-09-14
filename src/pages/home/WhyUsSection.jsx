

export default function WhyUsSection() {
  return (
    <div className="md:flex bg-white md:mb-0 mb-5 mx-[.5rem]">
      <div className="md:w-[40%] md:h-auto h-[270px]">
        <img src={process.env.PUBLIC_URL+'/images/pexels-ali-pazani-2777898.jpg'} alt="" />
      </div>
      <div className="flex-1 md:p-8 p-4">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-5">
          {data.map(us => (
            <div className="flex mb-5">
              <div className="md:h-[65px] h-[55px] md:w-[65px] w-[55px] border-2 border-lightblue p-3 rounded-full overflow-hidden mr-4">
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
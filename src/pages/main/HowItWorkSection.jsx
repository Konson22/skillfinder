import { Heading1 } from "../../components/HeadingText";


export default function HowItWorkSection() {
  return (
    <div className="px-[8%] py-[6rem]">
      <Heading1 text='How Service Connect Works' cName="text-center" />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-8">
        {data.map(item => (
          <div className="text-center md:p-0 p-5" key={item.title}>
            <div className="bg-gray-200 h-[120px] w-[120px] rounded-full p-6 mx-auto my-0">
              <img src={item.image} alt="" />
            </div>
            <span className="text-xl font-semibold block my-2">{item.title}</span>
            <p className="text-x">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


const data = [
  {
    title:'Search',
    text:`Use our search bar to find the service you need, or browse through categories to discover local professionals.`,
    image:process.env.PUBLIC_URL+'/images/recruitment (1).png'
  },
  {
    title:'Compare',
    text:`Review profiles, read customer testimonials, and compare prices to make an informed decision.`,
    image:process.env.PUBLIC_URL+'/images/price-tags.png'
  },
  {
    title:'Contact',
    text:`Connect with service providers directly through our platform. Ask questions, request quotes, and schedule appointments effortlessly.`,
    image:process.env.PUBLIC_URL+'/images/man-1459246_1280.png'
  },
  {
    title:'Feedback',
    text:`After receiving a service, don't forget to leave a review to help others in your community make their choices.`,
    image:process.env.PUBLIC_URL+'/images/rating.png'
  },
]
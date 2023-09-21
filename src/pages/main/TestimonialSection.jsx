import { FaQuoteRight } from "react-icons/fa";
import { Heading1 } from "../../components/HeadingText";
import Carousel from 'react-elastic-carousel'


const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
    itemsToScroll: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
    itemPadding:[2, 2, 2, 2]
  },
]

export default function TestimonialSection() {
  return (
    <div className="md:px-[8%] px-3 py-[4rem] bg-gray-200">
      <Heading1 text='What People Are Saying' cName="text-center mb-8" />
      <Carousel breakPoints={breakPoints} pagination={false} className="relative testimonial-section">
        {data.map((user, index) => (
          <div className="md:flex bg-white p-5 rounded md:mx-2 mx-3" key={index}>
            <div className="
              md:h-[100px] md:w-[100px] h-[150px] w-[150px] shadow-md p-1 rounded-full relative 
              bg-white md:mr-4 mx-auto my-0
            ">
              <img className="rounded-full" src={user.image} alt="" />
              <span className="bg-lightblue rounded-full absolute bottom-0 text-white p-2">
                <FaQuoteRight />
              </span>
            </div>
            <div className="flex-1 p-4">
              <p>{user.text}</p>
              <h4 className="text-xl">
                <span className="text-xl text-lightblue">{user.name}</span>/ <i>Designer</i>
              </h4>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}


const data = [
  {
    name:'James John',
    text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
    image:process.env.PUBLIC_URL+'/images/Image-1.png'
  },
  {
    name:'James John',
    text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
    image:process.env.PUBLIC_URL+'/images/Image-2.png'
  },
  {
    name:'James John',
    text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
    image:process.env.PUBLIC_URL+'/images/Image-3.png'
  },
  {
    name:'James John',
    text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
    image:process.env.PUBLIC_URL+'/images/Image.png'
  },
]
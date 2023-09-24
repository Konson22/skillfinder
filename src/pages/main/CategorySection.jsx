import { FiUserPlus } from "react-icons/fi";
import { Heading1 } from "../../components/HeadingText";
import { Link } from "react-router-dom";


export default function CategorySection() {
  return (
    <div className="py-[6rem] md:px-[8%] px-3">
      <Heading1 text='Top Service Providers' cName="text-center" />
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-3 mt-6">
        {data.map((item, index) => (
            <div className="bg-white" key={index}>
                <div className="md:h-[260px] h-[130px] relative text-white">
                    <img src={item.image} alt="" />
                    <span className="flex items-center bg-lightgreen absolute top-2 left-2 px-3 py-1 rounded">
                        <FiUserPlus className="mr-2" />
                        {index+2}
                    </span>
                    <h3 className="absolute bottom-4 left-2 md:text-2xl">{item.name}</h3>
                </div>
            </div>
        ))}
      </div>
      <div className="text-center mt-7">
        <Link className="bg-lightgreen text-white px-6 py-2 rounded" to='/providers'>
            Show More
        </Link>
      </div>
    </div>
  )
}


const data = [
    {
        name:'Sudo Agency',
        category:'Technology',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/welder-673559_1280.jpg'
    },
    {
        name:'Ak Graphic',
        category:'Designer',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/pexels-antoni-shkraba-4348401.jpg'
    },
    {
        name:'Sudo Agency',
        category:'Home Cleaning',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/Image-3.png'
    },
    {
        name:'Sudo Agency',
        category:'Technology',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/welder-673559_1280.jpg'
    },
    {
        name:'Ak Graphic',
        category:'Designer',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/pexels-antoni-shkraba-4348401.jpg'
    },
    {
        name:'Sudo Agency',
        category:'Home Cleaning',
        text:`We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider`,
        image:process.env.PUBLIC_URL+'/images/Image-3.png'
    },
]
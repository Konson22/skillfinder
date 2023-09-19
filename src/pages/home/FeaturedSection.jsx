import { FaFacebookMessenger, FaLinkedinIn, FaMapMarkerAlt, FaStar } from "react-icons/fa"
import { FiHeart, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import Carousel from 'react-elastic-carousel'

export default function FeaturedSection() {
  return (
    <div className="md:px-[8%] px-4 py-[4rem]">
        <div className="md:text-center md:px-[20%] px-3">
            <h2 className="text-4xl md:font-bold font-light mb-3">Featured Freelancers</h2>
            <p className="md:text-xl">
                We believe that every community is a tapestry of skills, talents, and expertise waiting to be discovered. Whether you're searching for a reliable plumber, a skilled electrician, or any other service provider
            </p>
        </div>
        <div className="md:grid hidden grid-cols-2 gap-4 mt-8">
            {data.map(user => (
                <div className="flex bg-white shadow-md p-3">
                    <div className="md:flex">
                        <div className="md:h-[170px] h-[100px] md:w-[170px] w-[100px]">
                            <img src={user.avatar} alt="" />
                        </div>
                        <div className="flex-1 p-3">
                            <div className="flex">
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                                <span className="mr-1">
                                    <FaStar />
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold">{user.name}</h3>
                            <h3 className="text-xl">{user.profession}</h3>
                            <span className="text-">Juba</span>
                            <p>{user.about}</p>
                            <Link className="bg-green-500 text-white px-3 py-1 mt-3 rounded block w-[max-content]" to='/profile'>
                                View Profile
                            </Link>
                        </div>
                    </div>
                    <div className="border-l px-2">
                        <span className="text-xl hover:bg-lightblue hover:text-white block p-1 mb-3">
                            <FiHeart />
                        </span>
                        <span className="text-xl hover:bg-lightblue hover:text-white block p-1 mb-3">
                            <FiMail />
                        </span>
                        <span className="text-xl hover:bg-lightblue hover:text-white block p-1 mb-3">
                            <FaFacebookMessenger />
                        </span>
                        <span className="text-xl hover:bg-lightblue hover:text-white block p-1 mb-3">
                            <FaLinkedinIn />
                        </span>
                        <span className="text-xl hover:bg-lightblue hover:text-white block p-1">
                            <FaMapMarkerAlt />
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <div className="featured md:hidden block mt-6">
            <Carousel >
                {data.map(user => (
                    <div className="md:flex bg-white shadow-md p-3">
                        <div className="md:flex">
                            <div className="md:h-[170px] h-[200px] md:w-[170px] mr-3">
                                <img src={data[0].avatar} alt="" />
                            </div>
                            <div className="flex-1 p-3">
                                <div className="flex">
                                    <span className="mr-1">
                                        <FaStar />
                                    </span>
                                    <span className="mr-1">
                                        <FaStar />
                                    </span>
                                    <span className="mr-1">
                                        <FaStar />
                                    </span>
                                    <span className="mr-1">
                                        <FaStar />
                                    </span>
                                    <span className="mr-1">
                                        <FaStar />
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold">{data[0].name}</h3>
                                <h3 className="text-xl">{data[0].profession}</h3>
                                <span className="text-">Juba</span>
                                <p>{data[0].about}</p>
                                <div className="md:block hidden mt-3">
                                    <Link className="bg-green-500 text-white px-3 py-1 rounded" to='/profile'>
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:border-l border-t flex justify-between px-2">
                            <div className="md:hidden block mt-3">
                                <Link className="bg-green-500 text-white px-3 py-2 rounded" to='/profile'>
                                    View Profile
                                </Link>
                            </div>
                            <span className="text-xl hover:bg-lightblue hover:text-white block p-1 my-2">
                                <FiHeart />
                            </span>
                            <span className="text-xl hover:bg-lightblue hover:text-white block p-1 my-2">
                                <FiMail />
                            </span>
                            <span className="text-xl hover:bg-lightblue hover:text-white block p-1 my-2">
                                <FaFacebookMessenger />
                            </span>
                            <span className="text-xl hover:bg-lightblue hover:text-white block p-1 my-2">
                                <FaLinkedinIn />
                            </span>
                            <span className="text-xl hover:bg-lightblue hover:text-white block p-1 my-2">
                                <FaMapMarkerAlt />
                            </span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        <div className="text-center mt-6">
           <Link className="bg-lightblue text-white rounded text-xl px-6 py-2" to='/experts'>View All</Link>
        </div>
    </div>
  )
}


const data = [
    {
        name:'Konson Ak',
        profession:'Software Engineer',
        avatar:process.env.PUBLIC_URL+'/images/Image.png',
        about:'service you need, or browse through categories to discover local professionals.',
        rated:5
    },
    {
        name:'John Marit',
        profession:'Software Engineer',
        avatar:process.env.PUBLIC_URL+'/images/Image-1.png',
        about:'service you need, or browse through categories to discover local professionals.',
        rated:5
    },
    {
        name:'Aliza Marko',
        profession:'Designer',
        avatar:process.env.PUBLIC_URL+'/images/Image-3.png',
        about:'service you need, or browse through categories to discover local professionals.',
        rated:5
    },
    {
        name:'Suzan John',
        profession:'Plumber',
        avatar:process.env.PUBLIC_URL+'/images/Image-2.png',
        about:'service you need, or browse through categories to discover local professionals.',
        rated:5
    },
]
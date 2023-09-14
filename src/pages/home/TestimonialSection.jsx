import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function TestimonialSection() {
  return (
    <div className="md:flex md:px-[8%] px-5 py-[4rem]">
        <div className="md:w-[35%] md:mb-0 mb-5">
            <h2 className="text-3xl ffont-bold">What People Say</h2>
            <p>
                Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals in your area or join our community as a service provider.
            </p>
        </div>
        <div className="flex-1 md:ml-8">
            <div className="md:grid hidden md:grid-cols-2 grid-cols-1 gap-4">
                {[...new Array(2)].map(user => (
                    <div className="bg-white shadow-md rounded relative px-3 pt-3 pb-[50px]">
                        <h3 className="text-xl font-bold">Konson Ak</h3>
                        <span className="text-xl">Developer</span>
                        <p>
                            Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals
                        </p>
                        <div className="flex absolute bottom-[-20px] left-4">
                            <div className="h-[65px] w-[65px] border-4 border-lightgray bg-white rounded-full overflow-hidden">
                                <img src={process.env.PUBLIC_URL+'/images/Image-1.png'} alt="" />
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden grid grid-cols-1 gap-4">
                {[...new Array(1)].map(user => (
                    <div className="bg-white shadow-md rounded relative px-5 pt-3 md:pb-[50px] pb-[70px]">
                        <h3 className="text-xl md:font-bold">Konson Ak</h3>
                        <span className="text-xl font-thin block mb-2">Developer</span>
                        <p>
                            Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals
                        </p>
                        <div className="flex absolute bottom-[-20px] left-4">
                            <div className="md:h-[65px] h-[75px] md:w-[65px] w-[75px] border-4 border-lightgray bg-white rounded-full overflow-hidden">
                                <img src={process.env.PUBLIC_URL+'/images/Image-1.png'} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <span className="block bg-green-600 rounded-full text-white text-2xl p-2 mr-2">
                    <FiChevronLeft />
                </span>
                <span className="block bg-green-600 rounded-full text-white text-2xl p-2 ml-2">
                    <FiChevronRight />
                </span>
            </div>
        </div>
    </div>
  )
}

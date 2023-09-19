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
        itemPadding:[4, 4, 4, 4]
    },
    {
        width: 850,
        itemsToShow: 2,
        itemsToScroll: 2,
        itemPadding:[4, 4, 4, 4]
    },
]

export default function TestimonialSection() {
  return (
    <div className="md:flex md:px-[8%] px-5 py-[4rem]">
        <div className="md:w-[30%] md:mb-0 mb-5">
            <h2 className="text-3xl ffont-bold">What People Say</h2>
            <p>
                Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals in your area or join our community as a service provider.
            </p>
        </div>
        <div className="testimonial-section flex-1 md:ml-8">
            <Carousel breakPoints={breakPoints} pagination={false} className="relative" >
                {[...new Array(12)].map(user => (
                    <div className="bg-white shadow-md rounded relative px-3 pt-3 pb-[50px] md:mx-1">
                        <h3 className="text-xl font-bold">Konson Ak</h3>
                        <span className="text-xl">Developer</span>
                        <p>
                            Whether you're seeking services or offering them, Local Service Finder is your local service marketplace. Discover the best professionals
                        </p>
                        <div className="flex absolute bottom-[-20px] left-4 z-40">
                            <div className="h-[65px] w-[65px] border-[6px] border-lightgray bg-white rounded-full overflow-hidden">
                                <img src={process.env.PUBLIC_URL+'/images/Image-1.png'} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}

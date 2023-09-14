

export default function HowItWorkSection() {
  return (
    <div className="bg-lightblue text-white md:px-[5%] px-8 py-[4rem]">
        <h2 className="text-4xl font-bold text-center mb-10">How SkillFinder Works?</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {data.map((d, index) => (
                <div className="bg-lightgry text-center rounded p-3" key={index}>
                    <div className="md:h-[120px] h-[100px] md:w-[120px] w-[100px] border-2 border-white rounded-full relative md:p-5 p-3 mx-auto my-0">
                        <img src={d.image} alt="" />
                        <div className="md:h-[35px] h-[30px] md:w-[35px] w-[30px] flex items-center justify-center md:text-xl font-bold bg-white text-lightblue rounded-full absolute right-0 top-0">
                            {index+1}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold">{d.title}</h3>
                        <p>{d.text}</p>
                    </div>
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
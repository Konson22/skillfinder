

export default function CategorySection() {
  return (
    <div className="md:mx-[8%] mx-3 md:my-[5rem] my-[2rem]">
        <h3 className="md:text-4xl text-2xl md:text-center mb-5">Populer Categories</h3>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3">
          {[...new Array(4)].map(() => (
            <div className="">
              <div className="md:h-[200px] h-[170px] rounded bg-white shadow-md shadow-black/50 p-2 mb-2">
                <img src={process.env.PUBLIC_URL+'/images/business-idea-647205_1280.jpg'} alt="" />
              </div>
              <span className="md:text-2xl text-xl block mx-2">Electricitan</span>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <button className="bg-lightblue text-white px-5 py-2 rounded">View More</button>
        </div>
    </div>
  )
}

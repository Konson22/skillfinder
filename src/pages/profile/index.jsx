

export default function ProfilePage() {
  return (
    <div className="">
      <div className="bg-sky-400 h-[200px]"></div>
      <div className="md:flex px-[8%]">
        <div className="px-8 mt-[-40px]">
          <div className="md:h-[200px] md:w-[200px]">
            <img className="rounded-full border-4" src={process.env.PUBLIC_URL+'/images/Image-3.png'} alt="" />
          </div>
          <h3 className="text-3xl font-bold text-center">Konson Akech</h3>
          <span className="text-xl block text-center">Software Engineer</span>
        </div>
        <div className="flex-1 p-5">
          <div className="mb-5">
            <h3 className="text-2xl font-bold">About me</h3>
            <p>
              Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <p>
              Whether you need a plumber, electrician, dentist, lawyer, tutor, or any other service, you can explore a wide range of categories on our website. We strive to be your go-to resource for all your local service needs
            </p>
          </div>
        </div>
        <div className="px-10">
          <h3 className="text-3xl">Rating</h3>
        </div>
      </div>
    </div>
  )
}

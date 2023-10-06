

export default function JobsPage() {
  return (
    <div className="px-[8%] py-[.5rem]">
      <span className="text-4xl">On Progress....</span>
      <div className="flex mt-5">
        <div className="w-[25%] border"></div>
        <div className="flex-1 ml-6">
          {[...new Array(15)].map(job => (
            <div className="flex border bg-gray-50 border-lightblue/30 mb-3">
              <div className="flex-1 px-5 py-1">
                <h4 className="text-xl">{jobs[0].position} ({jobs[0].position_no})</h4>
                <span className="text-sm">Employer: {jobs[0].employer}</span>
              </div>
              <button className="bg-lightblue text-white px-5 ">Apply now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


const jobs = [
  {
    id:1,
    position:'HR Manager',
    position_no:2,
    employer:'SSBL',
    deadline:'02/05/2023'
  },
  {
    id:2,
    position:'IT Officer',
    position_no:2,
    employer:'SSBL',
    deadline:'02/05/2023'
  },
]
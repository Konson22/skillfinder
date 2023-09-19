import { FaTag } from "react-icons/fa";



export default function CompanyCard({company}) {
  return (
    <div className="flex bg-white shadow-md rounded p-3" key={company._id}>
        <div className="h-[130px] w-[130px] rounded-ful overflow-hidden">
            <img src={company.logo} alt="" />
        </div>
        <div className="flex-1 p-3">
            <h3 className="text-xl font-semibold">{company.name}</h3>
            {/* <h3 className="text-xl font-thin">{company.profession}</h3> */}
            <p>{company.about}</p>
            <div className="bg-gray-50 inline-flex items-center border rounded px-2 py-1 mt-2">
                <span className="mr-1">
                    <FaTag />
                </span>
                {company.category}
            </div>
        </div>
    </div>
  )
}

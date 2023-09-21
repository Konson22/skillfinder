import SearchingCard from "../../components/Searching";
import UserCard from "../../components/UserCard";
import { useFreelancers } from "../../context-manager/FreelancersContextProvider";


export default function ExpertPage() {

  const { freelancers } = useFreelancers()
  // const [data, setDate] = useState([])

  return (
    <div className='md:px-[3%] px-3 bg-gray-100'>
      <div className="md:flex items-center justify-between mt-">
        <h3 className="md:text-4xl text-xl">Search</h3>
        <SearchingCard />
      </div>
      <div className="md:py-8 p-3">
        <h3 className="text-4xl font-bold">Freelancers</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
          {freelancers.length > 0 ? freelancers.map(user => <UserCard user={user} />) : 'No data'}
        </div>
      </div>
    </div>
  )
}

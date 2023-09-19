import UserCard from "../../components/UserCard"
import { useFreelancers } from "../../context-manager/FreelancersContextProvider"



export default function ExpertContent(){

  const { freelancers } = useFreelancers()

  return(
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
      {freelancers.length > 0 ? freelancers.map(user => <UserCard user={user} />) : 'No data'}
    </div>
  )
}
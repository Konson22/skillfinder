import { useSearchParams } from "react-router-dom"
import { useFreelancers } from "../context-manager/FreelancersContextProvider"
import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"


export default function SearchPage() {

  const [currentFreelancers, setCurrentFreelancers] = useState([])
  const { freelancers } = useFreelancers()
  const [searchParams] = useSearchParams()

  const category = searchParams.get('category')
  const city = searchParams.get('city')

  useEffect(() => {

    let results = [];
    if(freelancers.length > 0){
      if(city && category){
        results = freelancers.filter(c => c.state.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()) && c.profession.toLocaleLowerCase().startsWith(category.toLocaleLowerCase()))
      }else if(city){
        if(city === 'All States'){
          results = freelancers
        }else{
          results = freelancers.filter(c => c.state.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()))
        }
      }else if(category){
        results = freelancers.filter(c => c.profession.toLocaleLowerCase().startsWith(category.toLocaleLowerCase()))
      }
    }
    console.log(results)
   
    results.length && setCurrentFreelancers(results)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <div className="mx-[8%] py-4 bg-white">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
        {currentFreelancers.length > 0 ? currentFreelancers.map(user => <UserCard user={user} />) : 'No data'}
      </div>
    </div>
  )
}

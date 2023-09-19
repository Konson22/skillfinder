import SearchBar from "../../components/SearchBar";
import ExpertContent from "./ExpertContent";


export default function ExpertPage() {


  return (
    <div className='md:px-[3%] px-3'>
      <div className="md:flex items-center justify-between mt-8">
        <h3 className="md:text-4xl text-xl">Search</h3>
        <SearchBar width="md:w-[400px] w-full" />
      </div>
      <div className="md:py-8 p-3">
        <h3 className="text-4xl font-bold">Freelancers</h3>
        <ExpertContent />
      </div>
    </div>
  )
}

import CompanyCard from "../../components/CompanyCard";
import { useCompanies } from "../../context-manager/CompaniesContextProvider";


export default function CompainesContent(){

    const { companies } = useCompanies()
    return(
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
        {companies.length > 0 ? companies.map(company => <CompanyCard company={company} />) : 'No data'}
      </div>
    )
}


import { useSearchParams } from "react-router-dom"


export default function SearchPage() {

  const [searchParams] = useSearchParams()

  const category = searchParams.get('category')
  const city = searchParams.get('city')

  console.log(category, city)
  return (
    <div>SearchPage</div>
  )
}

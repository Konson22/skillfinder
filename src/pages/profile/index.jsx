import ProfileCard from "../../components/ProfileCard"
import { useGlobalApi } from "../../context-manager/GlobalContextProvider"


export default function ProfilePage() {

  const { isLoading, profile } = useGlobalApi()

  return (
    <div className="d">
      {isLoading &&<div>Loading...</div> }
      {(!isLoading && profile) && <ProfileCard profile={profile} /> }
    </div>
  )
}

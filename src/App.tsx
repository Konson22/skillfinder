import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import Navbar from "./components/appbar";
import ExpertPage from "./pages/experts";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/experts/Profile";
import Login from "./pages/form/Login";
import Signup from "./pages/form/Signup";
import JobsPage from "./pages/JobsPage";
import ProvidersPage from "./pages/ProvidersPage";
import ProfilePage from "./pages/profile";
import CreateResume from "./pages/form/CreateResume";


function App() {

  return (
    <div className="text-base text-gray-500">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/freelancers' element={<ExpertPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:profileId' element={<Profile />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/providers' element={<ProvidersPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create-resume' element={<CreateResume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

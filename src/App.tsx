import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/home";
import Navbar from "./components/navbar";
import ExpertPage from "./pages/experts";
import JobSeekersPage from "./pages/job-seeker";
import ProfilePage from "./pages/experts/ProfilePage";
import Footer from "./components/Footer";


function App() {

  
  return (
    <div className="bg-lightgray md:text-base text-sm text-gray-600">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/experts' element={<ExpertPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/job-seeker' element={<JobSeekersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

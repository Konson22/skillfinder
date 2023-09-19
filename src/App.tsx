import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/home";
import Navbar from "./components/navbar";
import ExpertPage from "./pages/experts";
import JobSeekersPage from "./pages/job-seeker";
import ProfilePage from "./pages/experts/ProfilePage";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import SearchPage from "./pages/SearchPage";


function App() {

  
  return (
    <div className="bg-lightgray text-sm text-gray-600">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/freelancers' element={<ExpertPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/profile/:freelancerId' element={<ProfilePage />} />
        <Route path='/job-seeker' element={<JobSeekersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

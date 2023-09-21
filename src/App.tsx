import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import Navbar from "./components/appbar";
import ExpertPage from "./pages/experts";
import JobSeekersPage from "./pages/job-seeker";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/experts/Profile";


function App() {


  return (
    <div className="text-base text-gray-500">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/freelancers' element={<ExpertPage />} />
        <Route path='/profile/:profileId' element={<Profile />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/job-seeker' element={<JobSeekersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

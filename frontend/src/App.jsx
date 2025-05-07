import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import FitnessTracker from './components/Fitness/FitnessTracker'
import NutritionTracker from './components/Nutrition/NutritionTracker'
import StressTracker from './components/Stress/StressTracker'
import Navbar from './components/shared/Navbar'
import Footer from './components/Footer/Footer'
import MyProfile from './pages/myProfile'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import ProfilePage from './pages/ProfilePage'
import UpdateHealthData from './pages/UpdateHealthData'
import { ToastContainer } from 'react-toastify';

// import PrivateRoute from './components/Shared/PrivateRoute'

export default function App() {

    const {isLoggedIn} = useContext(AppContext);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {
          isLoggedIn ? 
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/fitness" element={<FitnessTracker />} />
              <Route path="/nutrition" element={<NutritionTracker />} />
              <Route path="/stress" element={<StressTracker />} />
              <Route path="/my-profile" element={<MyProfile />} />

            </Routes>
            
          </div> :
          <div className='container mx-auto px-4 py-8'>
            <Routes>
            <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Login />} />
              <Route path="/fitness" element={<Login />} />
              <Route path="/nutrition" element={<Login />} />
              <Route path="/stress" element={<Login />} />
            </Routes>
          </div>
        }
        
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import FitnessTracker from './components/Fitness/FitnessTracker';
import NutritionTracker from './components/Nutrition/NutritionTracker';
import StressTracker from './components/Stress/StressTracker';
import Navbar from './components/shared/Navbar';
import Footer from './components/Footer/Footer';
import MyProfile from './pages/myProfile';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import ProfilePage from './pages/ProfilePage';
import UpdateHealthData from './pages/UpdateHealthData';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/shared/PrivateRoute';  // Import PrivateRoute component

export default function App() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Routes that need login protection */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes with PrivateRoute */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/fitness" element={<PrivateRoute><FitnessTracker /></PrivateRoute>} />
            <Route path="/nutrition" element={<PrivateRoute><NutritionTracker /></PrivateRoute>} />
            <Route path="/stress" element={<PrivateRoute><StressTracker /></PrivateRoute>} />
            <Route path="/my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
            <Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/update-health-data" element={<PrivateRoute><UpdateHealthData /></PrivateRoute>} />
          </Routes>
        </div>
        
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

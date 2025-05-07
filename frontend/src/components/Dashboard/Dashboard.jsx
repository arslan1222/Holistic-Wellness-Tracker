import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

export default function Dashboard() {
  const { backendUrl } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState({
    fitnessSummary: 0,
    nutritionSummary: 0,
    stressSummary: 0,
  });
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchDashboardData();
    } else {
      console.log('No token available, please login again');
    }
  }, [token]);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/dashboard`, {
        headers: { token }, 
      });
      console.log(res.data);

      setDashboardData({
        fitnessSummary: res.data.totalFitnessActivities,
        nutritionSummary: res.data.averageCalories,
        stressSummary: res.data.averageStressLevel,
      });
    } catch (err) {
      console.error('Error fetching dashboard data:', err.response?.data || err.message);
    }
  };

  return (
    <div className="mx-auto md:px-10 lg:px-20 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Fitness Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Fitness Summary</h3>
          <p className="mt-2 text-gray-600">
            {dashboardData.fitnessSummary} activities this week
          </p>
          <p className="text-primary mt-4 font-medium cursor-pointer">View details →</p>
        </div>

        {/* Nutrition Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Nutrition Summary</h3>
          <p className="mt-2 text-gray-600">
            {dashboardData.nutritionSummary} avg calories/day
          </p>
          <p className="text-primary mt-4 font-medium cursor-pointer">View details →</p>
        </div>

        {/* Stress Level Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Stress Level</h3>
          <p className="mt-2 text-gray-600">
            Average: {dashboardData.stressSummary}/10
          </p>
          <p className="text-primary mt-4 font-medium cursor-pointer">View details →</p>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Weekly Overview
        </h2>
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
          <p className="text-primary text-lg">Your Chart</p>
        </div>
      </div>
    </div>
  );
}

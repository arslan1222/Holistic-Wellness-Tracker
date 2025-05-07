import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  // If user is logged in, show the requested component; otherwise, redirect to /login
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;  // ✅ Show a loading message instead of redirecting too early

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

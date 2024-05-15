<<<<<<< HEAD

=======
>>>>>>> 15cd6e9265c51bdeb36009c0e790474cee68fe7f
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/user';

interface Props {
  redirectPath: string;
}

function ProtectedRoute({ redirectPath }: Props) {
  const user = useUserStore();

  if (user.user !== null) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
}

export default ProtectedRoute;

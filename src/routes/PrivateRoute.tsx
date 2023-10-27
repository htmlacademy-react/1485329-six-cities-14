import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../utils/constants';

type PrivateRouteProps = {
  authStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authStatus, children } = props;

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

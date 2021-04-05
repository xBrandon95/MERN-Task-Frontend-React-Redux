import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userAuthenticated } from '../../redux/actions/authActions';

const RoutePrivate = ({ component: Component, ...props }) => {
  // get state auth
  const { auth, loading } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthenticated());
  }, []);

  return (
    <Route
      {...props}
      render={props =>
        !auth && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RoutePrivate;

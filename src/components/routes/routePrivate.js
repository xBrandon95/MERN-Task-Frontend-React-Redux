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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // eslint-disable-next-line no-shadow
      render={props =>
        !auth && !loading ? (
          <Redirect to="/" />
        ) : (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        )
      }
    />
  );
};

export default RoutePrivate;

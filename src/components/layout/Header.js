import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutAction,
  userAuthenticated,
} from '../../redux/actions/authActions';
import { logoutProject } from '../../redux/actions/projectActions';
import { logoutTask } from '../../redux/actions/taskActions';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(userAuthenticated());
  }, []);

  const clickLogout = () => {
    dispatch(logoutAction());
    dispatch(logoutProject());
    dispatch(logoutTask());
  };

  return (
    <header className="app-header">
      {user && (
        <p className="name-user">
          Hola <span>{user.name}</span>
        </p>
      )}
      <nav className="nav-main">
        <button
          type="button"
          className="btn btn-blank text-white"
          onClick={clickLogout}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;

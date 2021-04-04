import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import showAlertAction from '../../redux/actions/alertActions';
import { loginAction } from '../../redux/actions/authActions';

const Login = () => {
  // hook get form data
  const [user, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  // extract email and password
  const { email, password } = user;

  // get state alert
  const { message, auth } = useSelector(state => state.auth);
  const { alert } = useSelector(state => state.alert);

  // Dispatch
  const dispatch = useDispatch();

  // history
  const history = useHistory();

  // in case the user or password no exists
  useEffect(() => {
    if (auth) {
      history.push('/proyectos');
    }

    if (message) {
      dispatch(showAlertAction(message.msg, message.category));
    }
  }, [message, auth, history]);

  // when user logs in
  const handleSubmit = e => {
    e.preventDefault();

    // Validate
    if (email.trim() === '' || password.trim() === '') {
      dispatch(
        showAlertAction('Todos los campos son obligatorios', 'alert-error'),
      );
      // eslint-disable-next-line no-useless-return
      return;
    }

    // Execute the action
    dispatch(
      loginAction({
        email,
        password,
      }),
    );
  };

  return (
    <div className="form-user">
      {alert && <div className={`alert ${alert.category}`}>{alert.msg}</div>}
      <div className="container-form shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="field-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu contraseña"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to="/nueva-cuenta" className="link-acount">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;

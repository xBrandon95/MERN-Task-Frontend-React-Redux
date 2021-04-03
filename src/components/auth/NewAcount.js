import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import showAlertAction from '../../redux/actions/alertActions';

const NewAcount = () => {
  // hook get form data
  const [user, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const { name, email, password, confirmPass } = user;

  // Dispatch
  const dispatch = useDispatch();

  // get state alert
  const { alert } = useSelector(state => state.alert);

  // when user sign in
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);

    // Validate
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPass.trim() === ''
    ) {
      dispatch(
        showAlertAction('Todos los campos son obligatorios', 'alert-error'),
      );
      return;
    }

    // Validate Password min 6 characters
    if (password.length < 6) {
      dispatch(
        showAlertAction(
          'El constraseña debe ser de al menos 6 caracteres',
          'alert-error',
        ),
      );
      // eslint-disable-next-line no-useless-return
      return;
    }

    // the 2 Passwords are the same
    if (password !== confirmPass) {
      dispatch(
        showAlertAction('Las contraseñas no son iguales', 'alert-error'),
      );
    }

    // Execute the action
  };

  return (
    <div className="form-user">
      {alert && <div className={`alert ${alert.category}`}>{alert.msg}</div>}
      <div className="container-form shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </div>
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
            <label htmlFor="confirmPass">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPass"
              name="confirmPass"
              placeholder="Repite tu contraseña"
              autoComplete="off"
              value={confirmPass}
              onChange={handleInputChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Registrar"
            />
          </div>
        </form>

        <Link to="/" className="link-acount">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NewAcount;

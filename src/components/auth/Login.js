import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const Login = () => {
  // hook get form data
  const [user, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = user;

  // when user logs in
  const handleSubmit = e => {
    e.preventDefault();

    // Validate

    // Execute the action
  };

  return (
    <div className="form-user">
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

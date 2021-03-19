import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const NewAcount = () => {
  // hook get form data
  const [user, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const { name, email, password, confirmPass } = user;

  // when user sign in
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);

    // Validate

    // Validate Password min 6 characters

    // the 2 Passwords are the same

    // Execute the action
  };

  return (
    <div className="form-user">
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

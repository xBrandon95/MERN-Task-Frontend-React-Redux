import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import {
  addProjectAction,
  showFormAction,
  errorFormAction,
} from '../../redux/actions/projectActions';
import { resetTaskAction } from '../../redux/actions/taskActions';

const FormProject = () => {
  // hook useForm get form data
  const [project, handleInputChange, reset] = useForm({
    name: '',
  });

  const { name } = project;

  // Get state new projects
  const { newProject, errorForm } = useSelector(state => state.projects);
  // dispatch
  const dispatch = useDispatch();

  // when the user submits the project
  const handleSubmit = e => {
    e.preventDefault();

    // Validate Project
    if (name === '') {
      dispatch(errorFormAction(true));
      return;
    }
    dispatch(errorFormAction(false));

    // Add State
    dispatch(addProjectAction(project));
    dispatch(resetTaskAction());
    // Reset Form
    reset();
  };

  // Show Form New Project
  const showFormProject = () => {
    // execute la action  of show form project
    dispatch(showFormAction());
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={showFormProject}
      >
        Nuevo Proyecto
      </button>

      {newProject && (
        <form className="form-new-project" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}

      {errorForm && <p className="message error">El nombre es obligatorio</p>}
    </>
  );
};

export default FormProject;

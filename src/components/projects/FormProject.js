import useForm from '../../hooks/useForm';

const FormProject = () => {
  // hook useForm get form data
  const [project, handleInputChange, reset] = useForm({
    name: '',
  });

  const { name } = project;

  // when the user submits the project
  const handleSubmit = e => {
    e.preventDefault();
    console.log(project);
    reset();

    // Validate Project

    // Add State

    // Reset Form
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primary">
        Nuevo Proyecto
      </button>

      <form className="form-new-project" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default FormProject;

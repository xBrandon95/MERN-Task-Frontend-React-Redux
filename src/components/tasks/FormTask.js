import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import {
  addTasksAction,
  errorFormTaskAction,
  resetActualTaskAction,
  updateTasksAction,
} from '../../redux/actions/taskActions';

const FormTask = () => {
  // hook get form data
  const [task, handleInputChange, reset, setTask] = useForm({
    name: '',
    state: false,
  });

  const { name } = task;

  // dispatch
  const dispatch = useDispatch();

  // get state active project, errorFormTask
  const { activeProject } = useSelector(state => state.projects);
  const { activeTask, errorFormTask } = useSelector(state => state.tasks);

  useEffect(() => {
    if (activeTask !== null) {
      setTask(activeTask);
    } else {
      reset();
    }
  }, [activeTask]);

  // form add tasks
  const handleSubmit = e => {
    e.preventDefault();

    // validate
    if (name.trim() === '') {
      dispatch(errorFormTaskAction(true));
      return;
    }
    dispatch(errorFormTaskAction(false));

    // Edit or Add Task
    if (activeTask === null) {
      // new task
      const newTask = { ...task, projectId: activeProject.id };
      // add task
      dispatch(addTasksAction(newTask));
    } else {
      dispatch(updateTasksAction({ ...task, projectId: activeProject.id }));
      dispatch(resetActualTaskAction());
    }

    // reset form
    reset();
  };

  if (!activeProject) return null;

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value={activeTask ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errorFormTask && (
        <p className="message error">El nombre de la tarea es obligatorio</p>
      )}
    </div>
  );
};

export default FormTask;

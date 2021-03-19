import { useDispatch, useSelector } from 'react-redux';
import { deleteProjectAction } from '../../redux/actions/projectActions';
import TaskItem from './TaskItem';

const ListTasks = () => {
  const dispatch = useDispatch();

  const taskProject = [
    { id: 1, name: 'Elegir Plataforma', state: true },
    { id: 2, name: 'Elegir Colores', state: false },
    { id: 3, name: 'Elegir Desarrollo', state: true },
  ];

  // get state active project
  const { activeProject } = useSelector(state => state.projects);

  if (!activeProject) return <h2>Selecciona un Proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {activeProject.name}</h2>

      <ul className="list-tasks">
        {taskProject.length === 0 ? (
          <li className="task">No hay tareas</li>
        ) : (
          taskProject.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-delete"
        onClick={() => dispatch(deleteProjectAction(activeProject.id))}
      >
        &times; Eliminar Proyecto
      </button>
    </>
  );
};

export default ListTasks;

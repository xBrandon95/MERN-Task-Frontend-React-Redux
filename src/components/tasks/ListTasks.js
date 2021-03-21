import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { deleteProjectAction } from '../../redux/actions/projectActions';
import TaskItem from './TaskItem';

const ListTasks = () => {
  const dispatch = useDispatch();

  // get state active project
  const { activeProject } = useSelector(state => state.projects);

  // get state active project
  const { tasksProject } = useSelector(state => state.tasks);

  if (!activeProject) return <h2>Selecciona un Proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {activeProject.name}</h2>

      <ul className="list-tasks">
        {tasksProject.length !== 0 || tasksProject == null ? (
          <TransitionGroup>
            {tasksProject.map(task => (
              <CSSTransition key={task.id} timeout={200} classNames="task">
                <TaskItem task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <li className="task-center">No hay tareas</li>
        )}
      </ul>

      <TransitionGroup>
        <CSSTransition timeout={200} classNames="task">
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => dispatch(deleteProjectAction(activeProject.id))}
          >
            &times; Eliminar Proyecto
          </button>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default ListTasks;

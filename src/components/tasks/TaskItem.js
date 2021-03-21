import { useDispatch, useSelector } from 'react-redux';
import {
  changeStateTaskAction,
  deleteTaskAction,
  getAllTasksAction,
  taskActualAction,
} from '../../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const { activeProject } = useSelector(state => state.projects);

  // Delete Task and Update Tasks
  const clickDeleteTask = taskId => {
    dispatch(deleteTaskAction(taskId));
    dispatch(getAllTasksAction(activeProject.id));
  };

  // Function change state task
  const clickChangeState = taskChange => {
    // eslint-disable-next-line no-param-reassign
    taskChange.state = !taskChange.state;
    dispatch(changeStateTaskAction(taskChange));
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        {task.state ? (
          <button
            type="button"
            className="complete"
            onClick={() => clickChangeState(task)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incomplete"
            onClick={() => clickChangeState(task)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(taskActualAction(task))}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => clickDeleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

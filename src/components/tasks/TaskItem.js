import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTaskAction,
  taskActualAction,
  updateTasksAction,
} from '../../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const { activeProject } = useSelector(state => state.projects);

  // Delete Task and Update Tasks
  const clickDeleteTask = async taskId => {
    await dispatch(deleteTaskAction(taskId, activeProject._id));
  };

  // Function change state task
  const clickChangeState = taskChange => {
    // eslint-disable-next-line no-param-reassign
    taskChange.state = !taskChange.state;
    dispatch(updateTasksAction(taskChange));
  };

  const clickEditTask = taskEdit => {
    dispatch(taskActualAction(taskEdit));
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
          onClick={() => clickEditTask(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => clickDeleteTask(task._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

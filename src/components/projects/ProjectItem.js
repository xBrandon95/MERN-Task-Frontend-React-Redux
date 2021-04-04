import { useDispatch } from 'react-redux';
import { actualProjectAction } from '../../redux/actions/projectActions';
import {
  getAllTasksAction,
  resetActualTaskAction,
  resetFormTaskAction,
} from '../../redux/actions/taskActions';

const ProjectItem = ({ project = {} }) => {
  const dispatch = useDispatch();

  // Function add actual project
  const selectedProject = actProject => {
    dispatch(actualProjectAction(actProject));
    // filter tasks
    dispatch(getAllTasksAction(actProject._id));
    // reset actual task
    dispatch(resetActualTaskAction());
    // reset form task
    dispatch(resetFormTaskAction());
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // execute action get actual project
        onClick={() => selectedProject(project)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default ProjectItem;

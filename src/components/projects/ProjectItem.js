import { useDispatch } from 'react-redux';
import { actualProjectAction } from '../../redux/actions/projectActions';

const ProjectItem = ({ project = {} }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // execute action get actual project
        onClick={() => dispatch(actualProjectAction(project))}
      >
        {project.name}
      </button>
    </li>
  );
};

export default ProjectItem;

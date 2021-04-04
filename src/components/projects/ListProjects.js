import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjectsAction } from '../../redux/actions/projectActions';
import ProjectItem from './ProjectItem';
import showAlertAction from '../../redux/actions/alertActions';

const ListProjects = () => {
  // Get State Projects
  const { projects, message } = useSelector(state => state.projects);
  const { alert } = useSelector(state => state.alert);

  // useDispatch
  const dispatch = useDispatch();

  // Get projects when loading component
  useEffect(() => {
    if (message) {
      dispatch(showAlertAction(message.msg, message.category));
    }
    dispatch(getAllProjectsAction());
  }, [message]);

  return (
    <>
      {projects.length !== 0 ? (
        <ul className="list-projects">
          {alert && (
            <div className={`alert ${alert.category}`}>{alert.msg}</div>
          )}
          <TransitionGroup>
            {projects.map(project => (
              <CSSTransition
                key={project._id}
                timeout={250}
                classNames="project"
              >
                <ProjectItem project={project} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <p>No hay proyectos, comienza agregando uno.</p>
      )}
    </>
  );
};

export default ListProjects;

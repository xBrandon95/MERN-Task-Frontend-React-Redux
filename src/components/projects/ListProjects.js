import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjectsAction } from '../../redux/actions/projectActions';
import ProjectItem from './ProjectItem';

const ListProjects = () => {
  // Get State Projects
  const { projects } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  // Get projects when loading component
  useEffect(() => {
    dispatch(getAllProjectsAction());
  }, []);

  return (
    <>
      {projects.length !== 0 ? (
        <ul className="list-projects">
          <TransitionGroup>
            {projects.map(project => (
              <CSSTransition
                key={project.id}
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

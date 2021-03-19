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
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <p>No hay proyectos, comienza agregando uno.</p>
      )}
    </>
  );
};

export default ListProjects;

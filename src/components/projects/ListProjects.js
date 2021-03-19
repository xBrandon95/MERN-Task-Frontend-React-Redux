import ProjectItem from './ProjectItem';

const ListProjects = () => {
  const projects = [
    { id: 1, name: 'Tienda Virtual' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Desarrollo Web' },
  ];

  return (
    <ul className="list-projects">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;

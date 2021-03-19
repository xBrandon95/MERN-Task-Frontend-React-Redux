import ListProjects from '../projects/ListProjects';
import FormProject from '../projects/FormProject';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <FormProject />

      <div className="projects">
        <h2>Tus Proyectos</h2>
        <ListProjects />
      </div>
    </aside>
  );
};

export default Sidebar;

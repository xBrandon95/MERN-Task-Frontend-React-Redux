import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const ScreenProjects = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-main">
        <Header />
        <main>
          <FormTask />
          <div className="container-tasks">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScreenProjects;

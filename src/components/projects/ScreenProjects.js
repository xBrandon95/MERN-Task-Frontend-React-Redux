import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAuthenticated } from '../../redux/actions/authActions';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const ScreenProjects = () => {
  const dispatch = useDispatch();
  // Extract info authenticated
  useEffect(() => {
    dispatch(userAuthenticated());
  }, []);

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

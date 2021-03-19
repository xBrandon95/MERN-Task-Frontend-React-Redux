import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import NewAcount from './components/auth/NewAcount';
import ScreenProjects from './components/projects/ScreenProjects';

// Redux
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NewAcount} />
          <Route exact path="/proyectos" component={ScreenProjects} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import NewAcount from './components/auth/NewAcount';
import ScreenProjects from './components/projects/ScreenProjects';
import RoutePrivate from './components/routes/routePrivate';
import tokenAuth from './config/token';

// Redux
import store from './redux/store';

// Check token
const token = localStorage.getItem('token');

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NewAcount} />
          <RoutePrivate exact path="/proyectos" component={ScreenProjects} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

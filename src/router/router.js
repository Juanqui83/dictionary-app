import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DictionaryScreen from './screens/DictionaryScreen';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/dictionary" component={DictionaryScreen} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

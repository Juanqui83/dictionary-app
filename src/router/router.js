import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DictionaryScreen from './screens/DictionaryScreen';

const basename = process.env.NODE_ENV === 'production' ? '/dictionary-app' : '/';

function AppRouter() {
  return (
    <Router basename={basename}>
      <Switch>
        <Route path="/dictionary" component={DictionaryScreen} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

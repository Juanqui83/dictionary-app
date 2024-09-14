// router.js
import DictionaryScreen from '../screens/DictionaryScreen';

const basename = process.env.NODE_ENV === 'production' ? '/dictionary-app/' : '/';

const routes = [
  { path: `${basename}dictionary`, component: DictionaryScreen },
];

export default routes;

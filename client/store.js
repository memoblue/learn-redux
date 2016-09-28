import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// root reducer
import rootReducer from './reducers/index';

// mock api
import comments from './data/comments';
import posts from './data/posts';

// deafault data for redux store
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState, compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

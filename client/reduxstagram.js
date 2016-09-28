// react
import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles/style.styl';

// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// redux
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

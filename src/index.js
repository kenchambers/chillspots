import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import SearchIndex from './components/views/search-index';
import ResultsIndex from './components/views/results-index/results-index';
import ResultItemIndex from './components/views/result-item-index/result-item-index';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../src/assets/css/hover-min.css';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/results/:lat/:lng/:name" component={ResultItemIndex} />
          <Route path="/results/:lat/:lng" component={ResultsIndex} />
          <Route path="/" component={SearchIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

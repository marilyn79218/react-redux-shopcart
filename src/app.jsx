// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
// import './stylesheets/app.scss';
// import 'bootstrap/dist/js/bootstrap';
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./stylesheets/app.scss');
require('bootstrap/dist/js/bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import reducers from './reducers';
const reducers = require('./reducers');

// const store = compose(applyMiddleware(thunk))(createStore)(reducers);
// const store = applyMiddleware(thunk)(createStore)(reducers);
// const store = createStore(
//   reducers,
//   {},
//   compose(applyMiddleware(thunk))
// );
// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk)
// );
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    // window.devToolsExtension ? window.devToolsExtension() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));

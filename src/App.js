import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import Tasks from './components/tasks'
import './App.css';

const store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="App-header">
        <span className="App-title">TODOs</span>
      </h1>
      <Tasks/>
      <div>
        Pages
      </div>
      <div>
        Task type
      </div>
    </div>
  </Provider>
);

export default App;

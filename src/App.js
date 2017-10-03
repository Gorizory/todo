import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { loadState, saveState }  from './localStorage';
import Tasks from './components/tasks';
import './App.css';

const persistedState = loadState();
const store = createStore(allReducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

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

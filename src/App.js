import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Link, Switch } from 'react-router-dom';
import allReducers from './reducers/index';
import { loadState, saveState }  from './localStorage';
import AllTasks from './components/allTasks';
import Task from './components/task';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-title">TODOs</span>
      </h1>
      <Switch>
        <Route exact path='/' component={AllTasks}/>
        <Route exact path='/:page' component={AllTasks}/>
        <Route exact path='/done/:page' component={AllTasks}/>
        <Route exact path='/active/:page' component={AllTasks}/>
        <Route path='/task/:number' component={Task}/>
      </Switch>
      <div>
        <Link to='/1'> Все </Link>
        <Link to='/active/1'> Активные </Link>
        <Link to='/done/1'> Выполненные </Link>
      </div>
    </div>
  </Provider>
);

export default App;

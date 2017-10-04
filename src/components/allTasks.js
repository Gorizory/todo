import React from 'react';
import {Route} from 'react-router-dom'
import TaskList from '../containers/taskList';
import AddTask from '../containers/addTask';
import Pages from '../containers/pages';

const Tasks = ({match}) => (
  <div>
    <AddTask/>
    <Route component={TaskList}/>
    <Route component={Pages}/>
  </div>
);

export default Tasks;
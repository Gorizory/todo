import React from 'react';
import TaskList from '../containers/taskList';
import AddTask from '../containers/addTask';

const Tasks = () => (
  <div>
    <AddTask/>
    <TaskList/>
  </div>
);

export default Tasks;
import React from 'react';
import { Route } from 'react-router-dom'
import TaskDesc from '../containers/taskDesc';

const Task = ({match}) => (
  <div>
    <Route component={TaskDesc}/>
  </div>
);

export default Task;
import {combineReducers} from 'redux';
import Tasks from './done'

const allReducers = combineReducers({
  tasks: Tasks
});

export default allReducers;
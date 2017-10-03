import {combineReducers} from 'redux';
import Tasks from './taskMas'

const allReducers = combineReducers({
  tasks: Tasks
});

export default allReducers;
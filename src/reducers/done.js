import Tasks from './task'

export default function (state=null, action) {
  const tasks = Tasks();
  switch (action.type) {
    case 'BOX_CHECKED':
      tasks[action.payload].done = true;
      return tasks;
    case 'BOX_UNCHECKED':
      tasks[action.payload].done = false;
      return tasks;
    default:
      return tasks;
  }
}
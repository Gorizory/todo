import Tasks from './task'

export default function (state=null, action) {
  let tasks = Tasks();
  switch (action.type) {
    case 'BOX_CHECKED':
      tasks[action.payload].status = !tasks[action.payload].status;
      return tasks;
    default:
      return tasks;
  }
}
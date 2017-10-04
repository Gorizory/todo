export default function (state=[], action) {
  let newTasks;
  switch (action.type) {
    case 'BOX_CHECKED':
      newTasks=Array.from(state);
      newTasks[action.payload].done = true;
      return newTasks;
    case 'BOX_UNCHECKED':
      newTasks=Array.from(state);
      newTasks[action.payload].done = false;
      return newTasks;
    case 'ADD_TASK':
      newTasks = state.concat({name: action.payload.text, done: false, desc: action.payload.desc});
      return newTasks;
    default:
      return state;
  }
}
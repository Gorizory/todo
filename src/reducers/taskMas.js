const tasks = [
  {name: 'kek', done: false},
  {name: 'not kek', done: true},
  {name: 'top kek', done: true},
  {name: 'lel', done: false}
];

export default function (state=tasks, action) {
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
      console.log(action);
      newTasks = state.concat({name: action.payload, done: false});
      return newTasks;
    default:
      return state;
  }
}
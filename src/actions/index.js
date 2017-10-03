export const checkBox = (payload) => {
  return {
    type: 'BOX_CHECKED',
    payload: payload
  }
}

export const uncheckBox = (payload) => {
  return {
    type: 'BOX_UNCHECKED',
    payload: payload
  }
}

export const addTask = (payload) => {
  return {
    type: 'ADD_TASK',
    payload: payload
  }
}
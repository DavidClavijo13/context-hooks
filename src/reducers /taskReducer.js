import uuid from 'uuid/v1';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          taskName: action.task.taskName,
          timeEstimate: action.task.timeEstimate,
          id: uuid()
        }
      ];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

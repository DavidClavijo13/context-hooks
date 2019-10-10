import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  return (
    <li onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })}>
      <div className='taskName'>{task.taskName}</div>
      <div className='timeEstimate'>{task.timeEstimate}</div>
    </li>
  );
};

export default TaskDetails;

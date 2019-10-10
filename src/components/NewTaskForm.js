import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_TASK', task: { taskName, timeEstimate } });
    setTaskName('');
    setTimeEstimate('');
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type='text'
        placeholder='Task Name'
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Time Estimate'
        value={timeEstimate}
        onChange={e => setTimeEstimate(e.target.value)}
        required
      />
      <input type='submit' value='Add Task' />
    </form>
  );
};

export default NewTaskForm;

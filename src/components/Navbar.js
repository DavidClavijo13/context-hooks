import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className='navbar'>
      <h1>A Tasklist to Stay on Track</h1>
      {tasks.length ? (
        <p>You have {tasks.length} tasks left to do</p>
      ) : (
        <p> Congrats, go learn some algorithms!</p>
      )}
    </div>
  );
};

export default Navbar;

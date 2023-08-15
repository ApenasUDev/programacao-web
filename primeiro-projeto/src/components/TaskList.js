import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, completeTask, removeTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

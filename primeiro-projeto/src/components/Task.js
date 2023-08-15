import React from 'react';

const Task = ({ task, completeTask, removeTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={() => completeTask(task.id)}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button onClick={() => removeTask(task.id)}>Remover</button>
      </div>
    </div>
  );
};

export default Task;

import React, { useState } from 'react';
import Header from '../src/components/Header';
import TaskList from '../src/components/TaskList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import styles from './App.module.css';
import './global.css';

export interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<TaskProps | undefined>(undefined);

  function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask({
      id: uuid(),
      description: event.target.value,
      completed: false
    });
  }
  
  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newTask) {
      setTasks((prevState) => [...prevState, newTask]);
    }    
    setNewTask(undefined);
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function markOrUnmarkTaskAsCompleted(id: string) {
      const updatedList = tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });

      setTasks(updatedList);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ToDoForm 
          onAddTask={handleAddTask} 
          onChangeText={handleChangeText}
          newTask={newTask}
        />
      </div>
      <ToDoList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onMarkOrUnmarkTaskAsCompleted={markOrUnmarkTaskAsCompleted} 
      />
    </>
  )
}

export default App

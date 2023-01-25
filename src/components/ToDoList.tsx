import { Clipboard } from 'phosphor-react';
import { TaskProps } from '../App';
import { ListItem } from './ListItem';
import styles from './ToDoList.module.css';

interface ToDoListProps {
    tasks: TaskProps[];
    onDeleteTask: (id: string) => void;
    onMarkOrUnmarkTaskAsCompleted: (id: string) => void;
}

export function ToDoList({ tasks, onDeleteTask, onMarkOrUnmarkTaskAsCompleted }: ToDoListProps) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.completed}>
                    <p>Concluídas</p>
                    <span>{tasks.filter(task => task.completed).length} de {tasks.length}</span>
                </div>
            </div>
            <div className={styles.list}>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <ListItem
                            key={task.id} 
                            id={task.id}
                            description={task.description} 
                            completed={task.completed} 
                            onDeleteTask={onDeleteTask}
                            onMarkOrUnmarkTaskAsCompleted={onMarkOrUnmarkTaskAsCompleted}
                        />
                    ))
                ) : (
                    <div className={styles.noItems}>
                        <Clipboard size={56} />
                        <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}
            </div>
        </>
    )
}
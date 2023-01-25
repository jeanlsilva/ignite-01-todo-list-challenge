import { Trash } from 'phosphor-react';
import styles from './ListItem.module.css';

interface ListItemProps {
    id: string;
    description: string;
    completed: boolean;
    onDeleteTask: (id: string) => void;
    onMarkOrUnmarkTaskAsCompleted: (id: string) => void;
}

export function ListItem({ id, description, completed, onDeleteTask, onMarkOrUnmarkTaskAsCompleted}: ListItemProps) {
    return (
        <div className={styles.item}>
            <div><span className={completed ? styles.check : undefined} onClick={() => onMarkOrUnmarkTaskAsCompleted(id)}></span></div>
            <p className={completed ? styles.completed : undefined}>{description}</p>
            <Trash size={14} onClick={() => onDeleteTask(id)} />
        </div>
    )
}
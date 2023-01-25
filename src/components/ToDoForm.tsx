import styles from './ToDoForm.module.css';
import addIcon from '../assets/plus.svg';
import { TaskProps } from '../App';
import { SetStateAction, useState } from 'react';

interface ToDoFormProps {
    onAddTask: (event: React.FormEvent<HTMLFormElement>) => void;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newTask?: TaskProps;
}

export function ToDoForm({ onAddTask, onChangeText, newTask }: ToDoFormProps) {
    function handleInvalidForm(event: React.FormEvent<HTMLInputElement>) {
        //@ts-ignore
        event.target.setCustomValidity('Por favor digite uma tarefa');
    }

    return (
        <form onSubmit={onAddTask} className={styles.form}>
            <input
                required 
                name='task' 
                type='text' 
                placeholder='Adicione uma nova tarefa' 
                value={newTask?.description || ''} 
                onChange={onChangeText} 
                onInvalid={handleInvalidForm}
            />
            <button type='submit' disabled={!newTask?.description}>
                Criar <img src={addIcon} alt='add-icon' />
            </button>
        </form>
    )
}
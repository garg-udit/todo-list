import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, completed: false }));
            setTask('');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, padding: 10 }}>
            <TextField
                label="Add a new task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" style={{ padding: 2 }} onClick={handleAddTask}>
                Add Task
            </Button>
        </div>
    );
};

export default TaskInput;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompleteTask, deleteTask, editTask } from '../redux/tasksSlice';
import { List, ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [editId, setEditId] = React.useState(null);
    const [editText, setEditText] = React.useState('');

    const handleEdit = (task) => {
        setEditId(task.id);
        setEditText(task.text);
    };

    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(editTask({ id, newText: editText }));
            setEditId(null);
            setEditText('');
        }
    };

    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <Checkbox
                        checked={task.completed}
                        onChange={() => dispatch(toggleCompleteTask(task.id))}
                    />
                    {editId === task.id ? (
                        <>
                            <TextField
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={() => handleSaveEdit(task.id)}
                                autoFocus
                            />
                            <IconButton onClick={() => handleSaveEdit(task.id)}>
                                <CheckIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <ListItemText
                                primary={task.text}
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            />
                            <IconButton onClick={() => handleEdit(task)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => dispatch(deleteTask(task.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;

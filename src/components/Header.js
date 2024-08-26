import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const Header = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.theme.mode);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    To-Do List
                </Typography>
                <Switch checked={themeMode === 'dark'} onChange={handleToggleTheme} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;

import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>
        <Header />
        <div  >
          <main >
            <TaskInput />
            <TaskList />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

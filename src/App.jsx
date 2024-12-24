import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import { Login } from './features/auth/component/Login';

function App() {
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
  }, [data]);

  return (
    <div>
    <Login/>
    </div>
  )
}

export default App

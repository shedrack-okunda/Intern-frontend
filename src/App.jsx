import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import { Login } from './features/auth/component/Login';
import { OtpVerification } from './features/auth/component/OtpVerification';
import { Signup } from './features/auth/component/Signup';

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
    <div style={{gap: '2px'}}>
      <Signup/>
      <OtpVerification/>
      <Login/>
    </div>
  )
}

export default App

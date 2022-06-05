import React from 'react'
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav';

const App: React.FC = () => {
  const [headerTitle, setHeaderTitle] = useState<string>('Configuration')
  const titleByLocation = useLocation().pathname.split('/')[1]

  useEffect(() => {
    titleByLocation ? setHeaderTitle(titleByLocation) : setHeaderTitle('Configuration')
  }, [titleByLocation])

  return (
    <Box sx={{
      width: "100%",
      backgroundColor: '#CACACA',
    }}>
      <Nav />
      <Header title={headerTitle} />
      <Outlet />
    </Box>
  );
}

export default App;

import React from 'react';
import { Box } from '@mui/material';
import CopilotInterface from './components/CopilotInterface';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <CopilotInterface />
    </Box>
  );
}

export default App;
import React from 'react';
import { Box } from '@mui/material';
import CopilotInterface from './components/CopilotInterface';
import PromptCards from './components/PromptCards';

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
      <PromptCards />
      <CopilotInterface />
    </Box>
  );
}

export default App;
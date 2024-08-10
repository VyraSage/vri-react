// src/App.jsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import CopilotInterface from './components/CopilotInterface'; 
import PromptCards from './components/PromptCards';

function App() {
  const [question, setQuestion] = useState('');

  const handlePromptSelect = (prompt) => {
    setQuestion(prompt);
  };

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
      
      <CopilotInterface question={question} setQuestion={setQuestion} />
      <PromptCards onPromptSelect={handlePromptSelect} />
    </Box>
  );
}

export default App;
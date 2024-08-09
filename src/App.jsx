import React, { useState } from 'react';
import { Box } from '@mui/material';
import CopilotInterface from './components/CoPilotInterface'; // Updated casing
import PromptCards from './components/PromptCards';

function App() {
  const [question, setQuestion] = useState('');

  const handlePromptSelect = (prompt) => {
    setQuestion(prompt);
    // Optionally, trigger automatic submission here if needed
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
      <PromptCards onPromptSelect={handlePromptSelect} />
      <CopilotInterface question={question} setQuestion={setQuestion} />
    </Box>
  );
}

export default App;
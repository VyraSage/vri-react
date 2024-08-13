// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import CopilotInterface from './components/CopilotInterface';
import PromptCards from './components/PromptCards';
import VriCopilotPage from './components/VriCopilotPage'; // Import the VriCopilotPage

function App() {
  const [question, setQuestion] = useState('');

  const handlePromptSelect = (prompt) => {
    setQuestion(prompt);
  };

  return (
    <Router>
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
        <Routes>
          <Route path="/" element={
            <>
              <CopilotInterface question={question} setQuestion={setQuestion} />
              <PromptCards onPromptSelect={handlePromptSelect} />
            </>
          } />
          <Route path="/vri-copilot" element={<VriCopilotPage />} /> {/* Use the VriCopilotPage */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import UserInput from './UserInput';
import ToolSelector from './ToolSelector';
import { useChatContext } from '../context/ChatContext';

const UserInputContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useChatContext();

  const handleSubmit = () => {
    if (inputValue.trim()) {
      addMessage('user', [{ type: 'text', text: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
      <UserInput value={inputValue} onChange={setInputValue} onSubmit={handleSubmit} />
      <ToolSelector />
      <IconButton color="primary" onClick={handleSubmit}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default UserInputContainer;

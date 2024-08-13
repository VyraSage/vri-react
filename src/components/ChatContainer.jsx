import React from 'react';
import { Box, Paper } from '@mui/material';
import ChatResponseProcessing from './ChatResponseProcessing';
import ChatResponse from './ChatResponse';
import UserInputContainer from './UserInputContainer';

const ChatContainer = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: 'auto', paddingBottom: 2 }}>
        <ChatResponse message="Hello, how can I assist you today?" isBot />
        <ChatResponse message="I have a question about your services." isBot={false} />
        <ChatResponseProcessing />
      </Box>
      <UserInputContainer />
    </Paper>
  );
};

export default ChatContainer;

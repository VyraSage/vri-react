import React, { useEffect, useRef } from 'react';
import { Box, Paper } from '@mui/material';
import { useChatContext } from '../context/ChatContext';
import ChatResponseProcessing from './ChatResponseProcessing';
import ChatResponse from './ChatResponse';
import UserInputContainer from './UserInputContainer';
import PromptCards from './PromptCards'; // Use PromptCards for initial state

const ChatContainer = () => {
  const { messages } = useChatContext();
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        {messages.length === 0 ? (
          <PromptCards />
        ) : (
          messages.map((msg, index) => (
            <ChatResponse key={index} message={msg.content[0].text} isBot={msg.role === 'assistant'} />
          ))
        )}
        <ChatResponseProcessing />
        <div ref={chatEndRef} />
      </Box>
      <UserInputContainer />
    </Paper>
  );
};

export default ChatContainer;

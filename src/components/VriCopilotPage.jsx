import React from 'react';
import { Box } from '@mui/material';
import ChatContainer from './ChatContainer';

const VriCopilotPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
        bgcolor: 'background.default',
      }}
    >
      <ChatContainer />
    </Box>
  );
};

export default VriCopilotPage;

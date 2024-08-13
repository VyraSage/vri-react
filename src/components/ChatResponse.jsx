import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatResponse = ({ message, isBot }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        padding: 1,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          bgcolor: isBot ? 'primary.light' : 'secondary.light',
          color: isBot ? 'text.primary' : 'text.secondary',
          padding: 1,
          borderRadius: 2,
          maxWidth: '70%',
          wordWrap: 'break-word',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ChatResponse;
